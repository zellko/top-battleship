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
  const testPos = [0, 0];
  const testShipA = Ship(3);

  testBoard.placeShip(testShipA, testPos);

  expect(testBoard.ships).toStrictEqual({
    ship0: [testShipA, [[0, 0], [0, 1], [0, 2]]],
  });
});

it('Gameboard factory - placeShip function - b', () => {
  const testBoard = Gameboard();
  const testPos = [4, 7];
  const testShipA = Ship(3);

  testBoard.placeShip(testShipA, testPos);

  expect(testBoard.ships).toStrictEqual({
    ship0: [testShipA, [[4, 7], [4, 8], [4, 9]]],
  });
});

it('Gameboard factory - placeShip function - Multiple ships', () => {
  const testBoard = Gameboard();
  const testPos = [4, 7];
  const testPos2 = [2, 4];
  const testShipA = Ship(3);
  const testShipB = Ship(1);

  testBoard.placeShip(testShipA, testPos);
  testBoard.placeShip(testShipB, testPos2);

  expect(testBoard.ships).toStrictEqual({
    ship0: [testShipA, [[4, 7], [4, 8], [4, 9]]],
    ship1: [testShipB, [[2, 4]]],
  });
});

it('Gameboard factory - placeShip function - Ship placed vertically', () => {
  const testBoard = Gameboard();
  const testPos = [4, 7];
  const testShipA = Ship(3);

  testBoard.placeShip(testShipA, testPos);
  testBoard.placeShip(testShipA, testPos, true);

  expect(testBoard.ships).toStrictEqual({
    ship0: [testShipA, [[4, 7], [4, 8], [4, 9]]],
    ship1: [testShipA, [[4, 7], [5, 7], [6, 7]]],
  });
});

/** *****************************
Test: receiveAttack function
******************************* */

it('Gameboard factory - receiveAttack function - Hit - a', () => {
  const testBoard = Gameboard();

  const testShipA = Ship(3);
  const testShipB = Ship(1);

  testBoard.placeShip(testShipA, [4, 7]);
  testBoard.placeShip(testShipB, [2, 3], true);

  testBoard.receiveAttack([4, 8]);
  expect(testBoard.ships.ship0[0].shipArray).toStrictEqual(['o', 'x', 'o']);
  expect(testBoard.ships.ship1[0].shipArray).toStrictEqual(['o']);
});

it('Gameboard factory - receiveAttack function - Hit - b', () => {
  const testBoard = Gameboard();

  const testShipA = Ship(3);
  const testShipB = Ship(2);

  testBoard.placeShip(testShipA, [4, 7]);
  testBoard.placeShip(testShipB, [2, 3], true);

  testBoard.receiveAttack([3, 3]);
  expect(testBoard.ships.ship0[0].shipArray).toStrictEqual(['o', 'o', 'o']);
  expect(testBoard.ships.ship1[0].shipArray).toStrictEqual(['o', 'x']);
});

// Test: missed attribute

it('Gameboard factory - receiveAttack function - Miss', () => {
  const testBoard = Gameboard();

  const testShipA = Ship(3);
  const testShipB = Ship(1);

  testBoard.placeShip(testShipA, [4, 7]);
  testBoard.placeShip(testShipB, [2, 3], true);

  testBoard.receiveAttack([4, 10]);
  testBoard.receiveAttack([3, 7]);
  expect(testBoard.missed).toStrictEqual([[4, 10], [3, 7]]);
});

/** *****************************
Test: areShipsSunk function
******************************* */

it('Gameboard factory - areShipsSunk function - true', () => {
  const testBoard = Gameboard();

  const testShipA = Ship(2);
  const testShipB = Ship(1);

  testBoard.placeShip(testShipA, [4, 7], true);
  testBoard.placeShip(testShipB, [2, 3]);

  testBoard.receiveAttack([4, 7]);
  testBoard.receiveAttack([5, 7]);
  testBoard.receiveAttack([2, 3]);

  expect(testBoard.areShipsSunk()).toBe(true);
});

it('Gameboard factory - areShipsSunk function - false', () => {
  const testBoard = Gameboard();

  const testShipA = Ship(3);
  const testShipB = Ship(1);

  testBoard.placeShip(testShipA, [4, 7]);
  testBoard.placeShip(testShipB, [2, 3]);

  testBoard.receiveAttack([4, 7]);
  testBoard.receiveAttack([2, 3]);
  expect(testBoard.areShipsSunk()).toBe(false);
});
