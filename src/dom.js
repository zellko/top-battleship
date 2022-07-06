const dom = (() => {
  const createBoard = (board) => {
    for (let index = 0; index < 100; index++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      board.appendChild(cell);
    }
  };
  const clearBoard = (board) => {
    console.log('clear board');
  };

  const showShip = (board, cellNumber, shipLength, isValid, isVertical) => {
    const firstCellRow = Math.floor(cellNumber / 10);

    for (let index = 0; index < shipLength; index++) {
      const cellRow = Math.floor((cellNumber + index) / 10);
      const offset = (isVertical) ? index * 10 : index;

      if ((firstCellRow !== cellRow) && !isVertical) return; // avoid horizontal overflow
      if ((cellNumber + offset) > 99) return; // avoid vertical overflow

      if (isValid) {
        board.children[cellNumber + offset].classList.add('hl-valid');
      } else {
        board.children[cellNumber + offset].classList.add('hl-invalid');
      }
    }
  };

  const hideShip = (board) => {
    const playerBoardArray = [...board.children];

    for (let index = 0; index < playerBoardArray.length; index++) {
      board.children[index].classList.remove('hl-valid');
      board.children[index].classList.remove('hl-invalid');
    }
  };

  const displayShips = (gameBoard, domBoard) => {
    // Display all ships on the board
    console.log(gameBoard);
    console.log(domBoard.children);

    // Get all ships position from Gameboard object
    const shipsPosition = gameBoard.allShipsPosition;

    // Color each cell with a ship in it
    for (let index = 0; index < shipsPosition.length; index++) {
      const posN = shipsPosition[index];
      console.log(posN);
      const cell = domBoard.children[posN];

      cell.classList.add('ship');
    }
  };

  return {
    createBoard, clearBoard, showShip, hideShip, displayShips,
  };
})();

export default dom;
