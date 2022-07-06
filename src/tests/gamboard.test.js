import { Gameboard } from '../gameboard';
import { Ship } from '../ship';

/** *****************************
Test: object creation
******************************* */

it('Test Ship factory - Returned object', () => {
  const testBoard = Gameboard();

  expect(testBoard.ships).toStrictEqual({});
  expect(testBoard.missed).toStrictEqual([]);
  expect(testBoard).toMatchObject({
    receiveAttack: expect.any(Function),
    placeShip: expect.any(Function),
    areShipsSunk: expect.any(Function),
  });
});

/** *****************************
Test: placeShip function
******************************* */

it('Gameboard factory - placeShip function - a', () => {
  const testBoard = Gameboard();
  const testPos = 0;
  const testShipA = Ship(3);

  testBoard.placeShip(testShipA, testPos);

  expect(testBoard.ships).toStrictEqual({
    ship0: [testShipA, [0, 1, 2]],
  });
});

it('Gameboard factory - placeShip function - b', () => {
  const testBoard = Gameboard();
  const testPos = 22;
  const testShipA = Ship(3);

  testBoard.placeShip(testShipA, testPos);

  expect(testBoard.ships).toStrictEqual({
    ship0: [testShipA, [22, 23, 24]],
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
    ship0: [testShipA, [0, 1, 2]],
    ship1: [testShipB, [22]],
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
    ship0: [testShipA, [0, 1, 2]],
    ship1: [testShipA, [21, 31, 41]],
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
