/* eslint-disable no-plusplus */
const Gameboard = () => {
  const board = { };
  const missed = [];

  const placeShip = (ship, position, isVertical) => {
    const boardKeys = Object.keys(board);
    const boardLength = boardKeys.length;
    const keyValue = `ship${boardLength}`;

    const shipPosition = [];

    for (let index = 0; index < ship.shipArray.length; index++) {
      let posX;
      let posY;
      if (isVertical) {
        posX = position[0] + index;
        posY = position[1];
      } else {
        posX = position[0];
        posY = position[1] + index;
      }

      shipPosition.push([posX, posY]);
    }

    board[keyValue] = [ship, shipPosition];
    return board;
  };
  const receiveAttack = (hitPos) => {
    for (const keys in board) {
      const ship = board[keys][0];
      const shipPosition = board[keys][1];

      for (let index = 0; index < shipPosition.length; index++) {
        const position = shipPosition[index];
        if (position[0] === hitPos[0] && position[1] === hitPos[1]) {
          ship.hit(index + 1);
          return 'hit';
        }
      }
    }

    missed.push(hitPos);
    return 'miss';
  };
  const areShipsSunk = () => {
    let allShipSunk = true;

    for (const keys in board) {
      const ship = board[keys][0];
      if (!ship.isSunk()) allShipSunk = false;
    }

    return allShipSunk;
  };

  return {
    board, missed, placeShip, receiveAttack, areShipsSunk,
  };
};

export { Gameboard };
