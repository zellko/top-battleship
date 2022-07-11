/* eslint-disable no-plusplus */
const Gameboard = () => {
  const allShipsPosition = [];
  const missed = [];
  const hit = [];
  const ships = { };

  function checkPosition(shipPosition, isVertical, oldShipPosition) {
    // Function to check if position is valid

    // First, we remove shipPosition from allShipsPosition
    const shipsPositions = [...allShipsPosition];

    if (oldShipPosition !== undefined) {
      const index = shipsPositions.indexOf(oldShipPosition[0]);
      shipsPositions.splice(index, oldShipPosition.length);
    }

    // Check that position are not already used by another ship...
    const isAlreadyUsed = shipPosition.some((element) => shipsPositions.includes(element));

    // Check that ship is not adjacent to another ship...
    const isAdjacent = shipPosition.some((element) => {
      if (shipsPositions.includes(element + 1) && Math.floor(element / 10) === Math.floor((element + 1) / 10)) return true;
      if (shipsPositions.includes(element - 1) && Math.floor(element / 10) === Math.floor((element - 1) / 10)) return true;
      if (shipsPositions.includes(element + 10)) return true;
      if (shipsPositions.includes(element - 10)) return true;
      return false;
    });

    // Check that position are not overflowing board...
    const isOverflow = shipPosition.some((element) => element > 99);

    // Check that position are not wrapping over 2 lines...
    let isWrapping = false;
    if (!isVertical) {
      isWrapping = (Math.floor(shipPosition[0] / 10) !== Math.floor(shipPosition[shipPosition.length - 1] / 10));
    }

    if (isAlreadyUsed || isAdjacent || isOverflow || isWrapping) {
      return false;
    }

    return true;
  }

  const placeShip = (ship, position, isVertical) => {
    const boardKeys = Object.keys(ships);
    const boardLength = boardKeys.length;
    const keyValue = `ship${boardLength}`;
    const shipPosition = [];

    let shipOrientation = isVertical;

    if (isVertical === undefined) shipOrientation = false;

    for (let index = 0; index < ship.shipArray.length; index++) {
      let pos;

      if (shipOrientation) {
        pos = position + (10 * index);
      } else {
        pos = position + index;
      }

      shipPosition.push(pos);
    }

    ships[keyValue] = [ship, shipPosition, shipOrientation];
    updateShipsPosition();
    return ships;
  };

  const placeShipsRandomly = (shipsArray) => {
    // Function to place ships randomly on the board.

    // For each ships in the given array...
    for (let index = 0; index < shipsArray.length; index++) {
      const ship = shipsArray[index];
      let isVertical;
      let position;

      let i = 0;
      let isValid = false;

      // Search for a random position which is valid ...
      do {
        // Randomly choose if ship is placed vertically or horizontally
        isVertical = (Math.floor(Math.random() * 2) === 0);
        // Randomly choose a position
        position = Math.floor(Math.random() * 99);

        // Get all positions that ship will use based on is length...
        const shipPosition = [];
        for (let n = 0; n < ship.shipArray.length; n++) {
          let pos;

          if (isVertical) {
            pos = position + (10 * n);
          } else {
            pos = position + n;
          }

          shipPosition.push(pos);
        }

        // Check that position is valid...
        if (!checkPosition(shipPosition, isVertical)) continue;

        isValid = true;

        // TEST BREAK THE LOOP IN CASE NOT POSITION ARE FOUND AFTER LOT OF TRIALS
        i += 1;
        if (i > 1000) isValid = true;
      } while (isValid === false);

      placeShip(ship, position, isVertical);
    }
  };

  const receiveAttack = (hitPos) => {
    for (const keys in ships) {
      const ship = ships[keys][0];
      const shipPosition = ships[keys][1];

      for (let index = 0; index < shipPosition.length; index++) {
        const position = shipPosition[index];
        if (position === hitPos) {
          ship.hit(index + 1);
          hit.push(hitPos);
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

  const rotateShip = (position) => {
    // If yes, get ship object...
    for (const key in ships) {
      const ship = ships[key];

      if (ship[1].includes(position)) {
        const isVertical = ship[2];
        const oldShipPosition = ship[1];
        const firstShipPosition = ship[1][0];
        const newShipPosition = [];

        // Rotate is position and update gameboard object
        oldShipPosition.forEach((pos, index) => {
          (isVertical)
            ? newShipPosition.push(firstShipPosition + index)
            : newShipPosition.push(firstShipPosition + (10 * index));
        });

        const isValid = (checkPosition(newShipPosition, !isVertical, oldShipPosition));

        if (!isValid) return 'error';

        ship[1] = newShipPosition;
        ship[2] = !(isVertical);
        updateShipsPosition();
      }
    }
  };

  const moveShip = (position, key) => {
    const ship = ships[key];

    const shipLength = ship[1].length;
    const isVertical = ship[2];
    const oldShipPosition = ship[1];
    const newShipPosition = [];

    for (let index = 0; index < shipLength; index++) {
      const pos = (isVertical) ? position + (index * 10) : position + index;
      newShipPosition.push(pos);
    }

    const isValid = (checkPosition(newShipPosition, isVertical, oldShipPosition));

    if (!isValid) return 'error';

    ship[1] = newShipPosition;
    updateShipsPosition();
  };

  const updateShipsPosition = () => {
    allShipsPosition.splice(0, allShipsPosition.length);

    for (const key in ships) {
      const ship = ships[key];
      const shipPosition = ship[1];

      shipPosition.forEach((pos) => allShipsPosition.push(pos));
    }
  };

  return {
    allShipsPosition,
    ships,
    missed,
    hit,
    areShipsSunk,
    placeShip,
    placeShipsRandomly,
    receiveAttack,
    moveShip,
    rotateShip,
    updateShipsPosition,
  };
};

export { Gameboard };
