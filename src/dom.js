const display = document.querySelector('.display');
const state = document.querySelector('.state');
const message = document.querySelector('.message');
const DomStartGame = document.querySelector('.btn-start');
const DomRandomBtm = document.querySelector('.btn-random');

const dom = (() => {
  const createBoard = (board) => {
    for (let index = 0; index < 100; index++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      board.appendChild(cell);
    }
  };
  const clearBoard = (board) => {
    const boardCell = [...board.children];

    for (let index = 0; index < boardCell.length; index++) {
      const cell = boardCell[index];

      cell.className = 'cell';
    }
  };

  const displayShips = (gameBoard, domBoard) => {
    // Display all ships on the board

    // Get all ships position from Gameboard object
    const shipsPosition = gameBoard.allShipsPosition;

    // Color each cell with a ship in it
    for (let index = 0; index < shipsPosition.length; index++) {
      const posN = shipsPosition[index];
      const cell = domBoard.children[posN];

      cell.classList.add('ship');
    }
  };

  const displayMiss = (gameBoard, domBoard) => {
    // Display all that are missed on the board in blue color

    // Get all missed position from Gameboard object
    const missedPosition = gameBoard.missed;

    // Color each cell which were "missed"
    for (let index = 0; index < missedPosition.length; index++) {
      const posN = missedPosition[index];
      const cell = domBoard.children[posN];

      cell.classList.add('miss');
    }
  };

  const displayHit = (gameBoard, domBoard) => {
    // Display cell that are "hit" on the board in red color

    // Get all hit position from Gameboard object
    const hitPosition = gameBoard.hit;

    // Color each cell which were "hit"
    for (let index = 0; index < hitPosition.length; index++) {
      const posN = hitPosition[index];
      const cell = domBoard.children[posN];

      cell.classList.add('hit');
    }
  };

  const displayMessage = (message1, message2, isWin) => {
    display.classList.remove('hide');
    state.textContent = message1;
    message.textContent = message2;

    if (isWin === 'init') {
      display.classList.remove('win');
      display.classList.remove('lost');
      DomStartGame.textContent = 'Start Game';
      DomRandomBtm.classList.remove('hide');
    } else if (isWin === 'win') {
      display.classList.add('win');
      DomStartGame.textContent = 'Restart';
      DomRandomBtm.classList.add('hide');
    } else {
      display.classList.add('lost');
      DomStartGame.textContent = 'Restart';
      DomRandomBtm.classList.add('hide');
    }
  };

  const hideDisplay = () => {
    display.className = 'display';
    display.classList.add('hide');
  };

  const placeShip = (board, cellNumber, shipLength, isVertical, isValid) => {
    const firstCellRow = Math.floor(cellNumber / 10);

    for (let index = 0; index < shipLength; index++) {
      const cellRow = Math.floor((cellNumber + index) / 10);
      const offset = (isVertical) ? index * 10 : index;

      if ((firstCellRow !== cellRow) && !isVertical) return; // avoid horizontal overflow
      if ((cellNumber + offset) > 99) return; // avoid vertical overflow

      // board.children[cellNumber + offset].classList.add('moving');

      if (isValid) {
        board.children[cellNumber + offset].classList.add('moving');
      } else {
        board.children[cellNumber + offset].classList.add('moving-invalid');
      }
    }
  };

  return {
    createBoard,
    clearBoard,
    displayShips,
    displayMiss,
    displayHit,
    displayMessage,
    hideDisplay,
    placeShip,
  };
})();

export default dom;
