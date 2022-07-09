/* eslint-disable no-plusplus */
const Gameboard = () => {
  const ships = { };
  const allShipsPosition = [];
  const missed = [];
  const hit = [];

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

        // Check that position are not already used by another ship...
        const isAlreadyUsed = shipPosition.some((element) => allShipsPosition.includes(element));
        if (isAlreadyUsed) {
          console.log('POSITION ALREADY USED');
          continue; // if yes, redo the loop with new random position
        }

        // Check that ship is not adjacent to another ship...
        const isAdjacent = shipPosition.some((element) => {
          if (allShipsPosition.includes(element + 1)) return true;
          if (allShipsPosition.includes(element - 1)) return true;
          if (allShipsPosition.includes(element + 10)) return true;
          if (allShipsPosition.includes(element - 10)) return true;
          return false;
        });

        if (isAdjacent) {
          console.log('isAdjacent');
          continue; // if yes, redo the loop with new random position
        }

        // Check that position are not overflowing board...
        const isOverflow = shipPosition.some((element) => element > 99);
        if (isOverflow) {
          console.log('OVERFLOW THE BOARD');
          continue; // if yes, redo the loop with new random position
        }

        // Check that position are not wrapping over 2 lines...
        if (!isVertical) {
          const isWrapping = (Math.floor(shipPosition[0] / 10) !== Math.floor(shipPosition[shipPosition.length - 1] / 10));
          if (isWrapping) {
            console.log('Wrapping THE BOARD');
            continue; // if yes, redo the loop with new random position
          }
        }

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

  return {
    ships, missed, placeShip, receiveAttack, areShipsSunk, allShipsPosition, hit, placeShipsRandomly,
  };
};

export { Gameboard };
