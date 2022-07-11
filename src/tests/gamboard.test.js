import { Gameboard } from '../gameboard';
import { Ship } from '../ship';

/** *****************************
Test: object creation
******************************* */

// it('Test Ship factory - Returned object', () => {
//   const testBoard = Gameboard();

//   expect(testBoard.ships).toStrictEqual({});
//   expect(testBoard.missed).toStrictEqual([]);
//   expect(testBoard).toMatchObject({
//     receiveAttack: expect.any(Function),
//     placeShip: expect.any(Function),
//     areShipsSunk: expect.any(Function),
//   });
// });

/** *****************************
Test: placeShip function
******************************* */

it('Gameboard factory - placeShip function - a', () => {
  const testBoard = Gameboard();
  const testPos = 0;
  const testShipA = Ship(3);

  testBoard.placeShip(testShipA, testPos);

  expect(testBoard.ships).toStrictEqual({
    ship0: [testShipA, [0, 1, 2], false],
  });
});

it('Gameboard factory - placeShip function - b', () => {
  const testBoard = Gameboard();
  const testPos = 22;
  const testShipA = Ship(3);

  testBoard.placeShip(testShipA, testPos);

  expect(testBoard.ships).toStrictEqual({
    ship0: [testShipA, [22, 23, 24], false],
  });
});

it('Gameboard factory - placeShip function - Multiple ships', () => {
  const testBoard = Gameboard();
  const testPos = 0;
  const testPos2 = 22;
  const testShipA = Ship(3);
  const testShipB = Ship(1);

  testBoard.placeShip(testShipA, testPos);
  testBoard.placeShip(testShipB, testPos2);

  expect(testBoard.ships).toStrictEqual({
    ship0: [testShipA, [0, 1, 2], false],
    ship1: [testShipB, [22], false],
  });
});

it('Gameboard factory - placeShip function - Ship placed vertically', () => {
  const testBoard = Gameboard();
  const testPosA = 0;
  const testPosB = 21;
  const testShipA = Ship(3);

  testBoard.placeShip(testShipA, testPosA);
  testBoard.placeShip(testShipA, testPosB, true);

  expect(testBoard.ships).toStrictEqual({
    ship0: [testShipA, [0, 1, 2], false],
    ship1: [testShipA, [21, 31, 41], true],
  });
});

// /** *****************************
// Test: receiveAttack function
// ******************************* */

it('Gameboard factory - receiveAttack function - Hit - a', () => {
  const testBoard = Gameboard();

  const testShipA = Ship(3);
  const testShipB = Ship(1);

  testBoard.placeShip(testShipA, 0);
  testBoard.placeShip(testShipB, 21, true);

  testBoard.receiveAttack(1);
  expect(testBoard.ships.ship0[0].shipArray).toStrictEqual(['o', 'x', 'o']);
  expect(testBoard.ships.ship1[0].shipArray).toStrictEqual(['o']);
});

it('Gameboard factory - receiveAttack function - Hit - b', () => {
  const testBoard = Gameboard();

  const testShipA = Ship(3);
  const testShipB = Ship(2);

  testBoard.placeShip(testShipA, 0);
  testBoard.placeShip(testShipB, 21, true);

  testBoard.receiveAttack(31);
  expect(testBoard.ships.ship0[0].shipArray).toStrictEqual(['o', 'o', 'o']);
  expect(testBoard.ships.ship1[0].shipArray).toStrictEqual(['o', 'x']);
});

// // Test: missed attribute

it('Gameboard factory - receiveAttack function - Miss', () => {
  const testBoard = Gameboard();

  const testShipA = Ship(3);
  const testShipB = Ship(1);

  testBoard.placeShip(testShipA, 0);
  testBoard.placeShip(testShipB, 21, true);

  testBoard.receiveAttack(3);
  testBoard.receiveAttack(22);
  expect(testBoard.missed).toStrictEqual([3, 22]);
});

// /** *****************************
// Test: areShipsSunk function
// ******************************* */

it('Gameboard factory - areShipsSunk function - true', () => {
  const testBoard = Gameboard();

  const testShipA = Ship(2);
  const testShipB = Ship(1);

  testBoard.placeShip(testShipA, 21, true);
  testBoard.placeShip(testShipB, 0);

  testBoard.receiveAttack(0);
  testBoard.receiveAttack(21);
  testBoard.receiveAttack(31);

  expect(testBoard.areShipsSunk()).toBe(true);
});

it('Gameboard factory - areShipsSunk function - false', () => {
  const testBoard = Gameboard();

  const testShipA = Ship(3);
  const testShipB = Ship(1);

  testBoard.placeShip(testShipA, 21, true);
  testBoard.placeShip(testShipB, 0);

  testBoard.receiveAttack(0);
  testBoard.receiveAttack(21);
  testBoard.receiveAttack(32);

  expect(testBoard.areShipsSunk()).toBe(false);
});

// /** *****************************
// Test: updateShipsPosition function
// ******************************* */

it('Gameboard factory - updateShipsPosition function ', () => {
  const testBoard = Gameboard();
  const testPosA = 0;
  const testPosB = 13;
  const testShipA = Ship(3);

  testBoard.placeShip(testShipA, testPosA);
  testBoard.placeShip(testShipA, testPosB);
  testBoard.updateShipsPosition();

  expect(testBoard.allShipsPosition).toStrictEqual([0, 1, 2, 13, 14, 15]);
});

// /** *****************************
// Test: rotateShip function
// ******************************* */

it('Gameboard factory - rotateShip function - valid', () => {
  const testBoard = Gameboard();
  const testPosA = 0;
  const testShipA = Ship(3);

  testBoard.placeShip(testShipA, testPosA);
  testBoard.rotateShip(0);

  expect(testBoard.ships).toStrictEqual({
    ship0: [testShipA, [0, 10, 20], true],
  });
});

it('Gameboard factory - rotateShip function - invalid', () => {
  // The position after the rotation is invalid (already used by another ship)
  // ...so the ship should not be rotated
  const testBoard = Gameboard();
  const testPosA = 0;
  const testPosB = 1;
  const testShipA = Ship(3);

  testBoard.placeShip(testShipA, testPosA, true);
  testBoard.placeShip(testShipA, testPosB, false);
  testBoard.rotateShip(0);

  expect(testBoard.ships).toStrictEqual({
    ship0: [testShipA, [0, 10, 20], true],
    ship1: [testShipA, [1, 2, 3], false],
  });
});

// /** *****************************
// Test: moveShip function
// ******************************* */

it('Gameboard factory - moveShip function - valid', () => {
  const testBoard = Gameboard();
  const testPosA = 0;
  const testShipA = Ship(3);

  testBoard.placeShip(testShipA, testPosA);
  testBoard.moveShip(1, 'ship0');

  expect(testBoard.ships).toStrictEqual({
    ship0: [testShipA, [1, 2, 3], false],
  });
});

it('Gameboard factory - moveShip function - invalid', () => {
  const testBoard = Gameboard();
  const testPosA = 0;
  const testPosB = 7;
  const testShipA = Ship(3);

  testBoard.placeShip(testShipA, testPosA);
  testBoard.placeShip(testShipA, testPosB);
  testBoard.moveShip(7, 'ship0');

  expect(testBoard.ships).toStrictEqual({
    ship0: [testShipA, [0, 1, 2], false],
    ship1: [testShipA, [7, 8, 9], false],
  });
});
