/* eslint-disable no-plusplus */
const Gameboard = () => {
  const ships = { };
  const allShipsPosition = [];
  const missed = [];

  const placeShip = (ship, position, isVertical) => {
    const boardKeys = Object.keys(ships);
    const boardLength = boardKeys.length;
    const keyValue = `ship${boardLength}`;

    const shipPosition = [];

    for (let index = 0; index < ship.shipArray.length; index++) {
      let pos;

      if (isVertical) {
        pos = position + (10 * index);
      } else {
        pos = position + index;
      }

      shipPosition.push(pos);
      allShipsPosition.push(pos);
    }

    ships[keyValue] = [ship, shipPosition];

    return ships;
  };
  const receiveAttack = (hitPos) => {
    for (const keys in ships) {
      const ship = ships[keys][0];
      const shipPosition = ships[keys][1];

      for (let index = 0; index < shipPosition.length; index++) {
        const position = shipPosition[index];
        if (position === hitPos) {
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

    for (const keys in ships) {
      const ship = ships[keys][0];
      if (!ship.isSunk()) allShipSunk = false;
    }

    return allShipSunk;
  };

  return {
    ships, missed, placeShip, receiveAttack, areShipsSunk, allShipsPosition,
  };
};

export { Gameboard };
