import './style.css';
import { Ship } from './ship';
import { Gameboard } from './gameboard';

const boardPosition = [
  [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [0, 9], /* ,
  [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9],
  [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 9],
  [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8], [3, 9],
  [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8], [4, 9],
  [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [5, 9],
  [6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8], [6, 9],
  [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8], [7, 9],
  [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8], [8, 9],
  [9, 0], [9, 1], [9, 2], [9, 3], [9, 4], [9, 5], [9, 6], [9, 7], [9, 8], [9, 9], */
];

const modifyArray = (() => {
  const toStringify = (array) => array.map((element) => JSON.stringify(element));
  const toParse = (array) => array.map((element) => JSON.parse(element));

  return { toStringify, toParse };
})();

/* */
function subtractArray(array) {
  // Function which substract provided array to all board position

  // Convert array position to string so they can be compared with .includes
  // const boardToString = boardPosition.map((element) => JSON.stringify(element));
  const boardToString = modifyArray.toStringify(boardPosition);

  // const arrayToString = array.map((element) => JSON.stringify(element));
  const arrayToString = modifyArray.toStringify(array);

  // Remove position in array (arrayToString) from boardPosition (boardToString)
  const subtractArrayString = boardToString.filter((element) => !arrayToString.includes(element));
  // Convert position back to array

  // const subtractedArray = subtractArrayString.map((element) => JSON.parse(element));
  const subtractedArray = modifyArray.toParse(subtractArrayString);
  return subtractedArray;
}

function getPosition(ships, missed) {
  // Function to get valid / invalid position from the board
  const allShipsPosition = [];

  // For every Ship Object...
  for (const ship in ships) {
    // ...Get the ship position (array of every positions used by the ship)
    const shipPosition = ships[ship][1];
    // Push every position used by the ship to allShipsPosition array
    for (let index = 0; index < shipPosition.length; index++) {
      const element = shipPosition[index];
      allShipsPosition.push(element);
    }
  }

  const invalidPosition = allShipsPosition.concat(missed);
  const validPosition = subtractArray(invalidPosition);

  return [validPosition, invalidPosition];
}

function checkPosition(gameboardShip, shipLength, pos, isVertical) {
// When user want to place a ship on the board...
// ... check if the position is valid (the ship should not overflow the board)
// ... or share a position with another ship

  // Determinate future ship position based on ship length and cell position
  const futureShipPos = [pos];
  for (let index = 1; index < shipLength; index++) {
    let posX;
    let posY;
    if (isVertical) {
      posX = pos[0] + index;
      posY = pos[1];
    } else {
      posX = pos[0];
      posY = pos[1] + index;
    }
    futureShipPos.push([posX, posY]);
  }

  // Stringify future ship position
  const futureShipPosStr = modifyArray.toStringify(futureShipPos);

  // Get board position which are not valid (already used by another ship)
  const invalidPosition = getPosition(gameboardShip, [])[1];
  // Stringify  invalidPosition
  const invalidPositionStr = modifyArray.toStringify(invalidPosition);

  for (let index = 0; index < futureShipPosStr.length; index++) {
    const element = futureShipPosStr[index];
    if (invalidPositionStr.includes(element)) return false;
  }

  // Check if future ship overflow the board (pos x or pos y > 9)
  for (let index = 0; index < futureShipPos.length; index++) {
    const element = futureShipPos[index];
    if (element[0] > 9 || element[1] > 9) return false;
  }

  return true;
}

export { subtractArray, getPosition, checkPosition };
