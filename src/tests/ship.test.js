import { Ship } from '../ship';

/** *****************************
Test: object creation
******************************* */

it('Test Ship factory - Returned object', () => {
  const testShip = Ship(5);

  expect(testShip.shipArray).toStrictEqual(['o', 'o', 'o', 'o', 'o']);

  expect(testShip).toMatchObject({
    hit: expect.any(Function),
    isSunk: expect.any(Function),
  });
});

/** *****************************
Test: hit function
******************************* */

it('Ship factory - Hit function - pass', () => {
  const testShip = Ship(2);
  expect(testShip.shipArray).toStrictEqual(['o', 'o']);

  testShip.hit(2);
  expect(testShip.shipArray).toStrictEqual(['o', 'x']);
});

it('Ship factory - Hit function - incorrect number - over', () => {
  const testShip = Ship(3);
  expect(testShip.shipArray).toStrictEqual(['o', 'o', 'o']);

  expect(testShip.hit(4)).toBe('positionError');
});

it('Ship factory - Hit function - incorrect number - 0', () => {
  const testShip = Ship(1);
  expect(testShip.shipArray).toStrictEqual(['o']);

  expect(testShip.hit(0)).toBe('positionError');
});

it('Ship factory - Hit function - incorrect number - negative number', () => {
  const testShip = Ship(0);
  expect(testShip.shipArray).toStrictEqual([]);

  expect(testShip.hit(-1)).toBe('positionError');
});

/** *****************************
Test: isSunk function
******************************* */

it('Ship factory - isSunk function - True', () => {
  const testShip = Ship(2);
  testShip.hit(1);
  testShip.hit(2);

  expect(testShip.isSunk()).toBe(true);
});

it('Ship factory - isSunk function - False', () => {
  const testShip = Ship(2);

  expect(testShip.isSunk()).toBe(false);
});
