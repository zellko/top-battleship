// import { subtractArray, getPosition, checkPosition } from '../index';
// import { Gameboard } from '../gameboard';
// import { Ship } from '../ship';

// /** *****************************
// Test setup
// ******************************* */
// const testBoard = Gameboard();
// const testShipA = Ship(2);
// const testShipB = Ship(3);

// testBoard.placeShip(testShipA, [0, 0]);
// testBoard.placeShip(testShipB, [0, 7]);
// testBoard.receiveAttack([0, 3]);

it.todo('Todo');

// /** *****************************
// Test array subtraction function
// - This function subtract to array
// ******************************* */
// it('Index - subtractArray() function', () => {
//   const testArray = subtractArray([[0, 0], [0, 3]]);
//   expect(testArray).toStrictEqual([[0, 1], [0, 2],
//     [0, 4], [0, 5], [0, 6],
//     [0, 7], [0, 8], [0, 9]]);
// });

// /** *****************************
// Test getPosition function
// - This function get all valid board position
// - Valid position are position who are not "missed" or used by player ship
// ******************************* */

// it('Index - getPosition() function', () => {
//   const validPosition = getPosition(testBoard.ships, testBoard.missed)[0];
//   expect(validPosition).toStrictEqual([[0, 2], [0, 4], [0, 5], [0, 6]]);
// });

// /** *****************************
// Test checkPosition function
// - When user want to place a ship on the board...
// - This function check that the ship do no overflow the board...
// - And check that one of the position is not used by another ship
// ******************************* */

// it('Index - Ship placement - checkPosition() function - valid', () => {
//   const isValid = checkPosition(testBoard.ships, testShipA.shipArray.length, [0, 4], false);
//   expect(isValid).toBe(true);
// });

// it('Index - Ship placement - checkPosition() function - not valid (used by another ship)', () => {
//   const isValid = checkPosition(testBoard.ships, testShipA.shipArray.length, [0, 0]);
//   expect(isValid).toBe(false);
// });

// it('Index - Ship placement - checkPosition() function - not valid (board overflow horizontal)', () => {
//   const testBoardB = Gameboard();
//   testBoardB.placeShip(testShipA, [0, 0]);
//   testBoardB.placeShip(testShipB, [0, 2]);

//   const isValid = checkPosition(testBoardB.ships, testShipA.shipArray.length, [0, 9], false);
//   expect(isValid).toBe(false);
// });

// it('Index - Ship placement - checkPosition() function - not valid (board overflow vertical)', () => {
//   const testBoardC = Gameboard();
//   testBoardC.placeShip(testShipA, [0, 0]);
//   testBoardC.placeShip(testShipB, [0, 2]);

//   const isValid = checkPosition(testBoardC.ships, testShipA.shipArray.length, [9, 8], true);
//   expect(isValid).toBe(false);
// });
