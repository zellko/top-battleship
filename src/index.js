import './style.css';
import dom from './dom';
import { Ship } from './ship';
import { Gameboard } from './gameboard';
import { Player } from './player';

const DomBoard = document.querySelectorAll('.board');
const DomStartGame = document.querySelector('.btn-start');
const DomRandomBtm = document.querySelector('.btn-random');
let gameStatus = 'init';
let movedShip; // Variable to store the ship currently moved
let activePlayer = 'player1';

/** ***********************
INITIALIZATION OF BOARDS
************************* */
const player1Board = Gameboard();
const player2Board = Gameboard();

const player1 = Player(player1Board);
const player2 = Player(player2Board);

dom.createBoard(DomBoard[0]);
dom.createBoard(DomBoard[1]);

function iaPlay() {
  // Function to generate a random hit position.
  const position = player2.aiAttack();

  // Check if it's a valid position, the cell should not have been used already...
  if (player1.board.missed.includes(position) || player1.board.hit.includes(position)) { iaPlay(); }

  // ...If it's valid, use Gameboard method receiveAttack
  player1.board.receiveAttack(position);

  // Update the dom...
  dom.displayMiss(player1.board, DomBoard[0]); // attack that missed
  dom.displayHit(player1.board, DomBoard[0]); // attack that hit

  // Check if all ship are sunk...
  if (player1.board.areShipsSunk()) {
    dom.displayMessage('You Lost!', '');
    gameStatus = 'ended';
  }
}

function randomShipPlacement(domB, board) {
  // Function to place ships randomly on the board.

  // Clear the board
  dom.clearBoard(domB);

  // Create ships to be placed
  const ships = [Ship(2), Ship(2), Ship(3), Ship(4), Ship(5)];

  // Place ships randomly
  board.placeShipsRandomly(ships);

  // Display them on the board
  dom.displayShips(player1.board, DomBoard[0]);
}

// Generate a random board after the page loading
randomShipPlacement(DomBoard[0], player1.board);
randomShipPlacement(DomBoard[1], player2.board);

// Display them on the screen
dom.displayShips(player1.board, DomBoard[0]);
// dom.displayShips(player2.board, DomBoard[1]);

/** ***********************
EVENT LISTENER
************************* */

DomRandomBtm.addEventListener('click', () => {
  // When player click on ships "Random" placement button...
  const player = (activePlayer === 'player1') ? player1 : player2;
  const dom_board = (activePlayer === 'player1') ? DomBoard[0] : DomBoard[1];

  // // Generate a new gameboard for active player player
  player.board = Gameboard();
  randomShipPlacement(dom_board, player.board);
});

DomStartGame.addEventListener('click', () => {
  // When player click "start game"...

  // If a game just ended, reset the gameboard...
  if (gameStatus === 'ended') {
  // // Generate a new gameboard for players
    player1.board = Gameboard();
    randomShipPlacement(DomBoard[0], player1.board);

    player2.board = Gameboard();
    randomShipPlacement(DomBoard[1], player2.board);
    dom.displayMessage('Place your ships!', 'Click on a ship to move it, double click to rotate it!', 'init');

    gameStatus = 'init';
    return;
  }

  // ... else start a new game.

  // Remove instruction/result screen
  dom.hideDisplay();

  // Clear boards and display randomly placed ship
  DomBoard.forEach((board) => dom.clearBoard(board));
  dom.displayShips(player1.board, DomBoard[0]);
  // dom.displayShips(player2.board, DomBoard[1]);

  // Set active player and reset movedShip variable
  movedShip = undefined;
  activePlayer = 'player1';

  // Start the game loop
  gameStatus = 'game';
});

DomBoard.forEach((board) => board.addEventListener('mouseover', (e) => {
  // When a ship is being moved, display it on the board at his future position
  if (![...e.target.classList].includes('cell')) return;
  if (gameStatus !== 'movingShip') return;

  // Get player board and board number
  const playerBoard = e.target.parentElement;
  const playerBoardNumber = e.target.parentElement.classList[1];

  const mouseoverCell = e.target;
  const position = [...playerBoard.children].indexOf(mouseoverCell);

  const player = (playerBoardNumber === 'player1') ? player1 : player2;
  const ship = player.board.ships[movedShip[1]];

  // Prevent that the ship is displayed on the wrong board
  if (playerBoardNumber !== movedShip[0]) return;

  // Get future ship positions
  const futurePosition = [];
  const isVertical = ship[2];

  for (let n = 0; n < ship[1].length; n++) {
    let pos;

    if (isVertical) {
      pos = position + (10 * n);
    } else {
      pos = position + n;
    }

    futurePosition.push(pos);
  }

  dom.clearBoard(playerBoard);
  dom.displayShips(player.board, playerBoard);

  // Check if the ship future position is valid...
  const isPositionValid = player.board.checkPosition(
    futurePosition,
    isVertical,
    ship[1],
    player.board.allShipsPosition,
  );

  // ... Show ship future position on the board
  dom.placeShip(playerBoard, position, ship[1].length, ship[2], isPositionValid);
}));

DomBoard.forEach((board) => board.addEventListener('click', (e) => {
  // When player click on a cell...

  // Ignore click if it's not a board cell
  if (![...e.target.classList].includes('cell')) return;

  // Get player board and board number
  const playerBoard = e.target.parentElement;
  const playerBoardNumber = e.target.parentElement.classList[1];

  // Get cell DOM reference and position
  const cell = e.target;
  const position = [...playerBoard.children].indexOf(cell);

  const player = (playerBoardNumber === 'player1') ? player1 : player2;

  switch (gameStatus) {
    case 'game':
      // Check that active player is using the correct board.
      if (activePlayer === playerBoardNumber) return;

      // Check if it's a valid position, the cell should not have been used already...
      if (player.board.missed.includes(position) || player.board.hit.includes(position)) return;

      // ...If it's valid, use Gameboard method receiveAttack
      player.board.receiveAttack(position);

      // Update the dom...
      dom.displayMiss(player.board, playerBoard); // attack that missed
      dom.displayHit(player.board, playerBoard); // attack that hit

      // Check if all ship are sunk...
      if (player.board.areShipsSunk()) {
        // If yes, show "you won" on the board
        dom.displayMessage('You Won!', '', 'win');
        gameStatus = 'ended';
      }

      // Alternate between the player
      (activePlayer === 'player1') ? activePlayer = 'player2' : activePlayer = 'player1';

      // Player 2 is played by the IA (hit a random position)
      if (activePlayer === 'player2') {
        iaPlay();
        activePlayer = 'player1';
      }

      break;

    case 'movingShip':
      // Place ship being moved at a new position...

      // Prevent that a ship is moved across player 1 and player 2 board
      if (playerBoardNumber !== movedShip[0]) return;

      // Update ship position in the player gameboard object
      player.board.moveShip(position, movedShip[1]);

      // update DOM
      dom.clearBoard(playerBoard);
      dom.displayShips(player.board, playerBoard);

      gameStatus = 'init';
      break;

    case 'init':
      // If the user click on a ship, start to move it...

      // check if cell is used by a ship...
      if (player.board.allShipsPosition.includes(position)) {
        // If yes, get ship object...
        for (const key in player.board.ships) {
          const ship = player.board.ships[key];

          if (ship[1].includes(position)) {
            movedShip = [playerBoardNumber, key];
          }
        }

        // Moving Ship
        gameStatus = 'movingShip';
      }
      break;

    default:
      break;
  }
}));

DomBoard.forEach((board) => board.addEventListener('dblclick', (e) => {
  // If the user double click on a ship, rotate it...

  // Ignore click if it's not a board cell
  if (![...e.target.classList].includes('cell')) return;
  if (gameStatus !== 'init') return; // Game should be in init status

  // Get player board and board number
  const playerBoard = e.target.parentElement;
  const playerBoardNumber = e.target.parentElement.classList[1];

  // Get cell DOM reference and position
  const cell = e.target;
  const position = [...playerBoard.children].indexOf(cell);

  const player = (playerBoardNumber === 'player1') ? player1 : player2;

  // check if cell is used by a ship...
  if (player.board.allShipsPosition.includes(position)) {
    gameStatus = 'rotatingShip';

    // Rotate the ship using gameboard method
    player.board.rotateShip(position);

    // update DOM
    dom.clearBoard(playerBoard);
    dom.displayShips(player.board, playerBoard);
  }
  gameStatus = 'init';
}));
