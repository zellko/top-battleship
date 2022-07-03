import { Player } from '../player';
import { Gameboard } from '../gameboard';

/** *****************************
Test: object creation
******************************* */

it('Test Player factory - Returned object', () => {
  const testBoard = Gameboard();
  const testPlayer = Player(testBoard);

  expect(testPlayer.board).toStrictEqual(testBoard);
  expect(testPlayer).toMatchObject({
    aiAttack: expect.any(Function),
  });
});

/** *****************************
Test: aiAttack function
******************************* */

// https://stackoverflow.com/questions/41570273/
// how-to-test-a-function-that-output-is-random-using-jest?answertab=trending#tab-top
// Mock Math.randon() function

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.8);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});

it('Player factory - aiAttack function - Random cell - a ', () => {
  const testPlayer = Player();
  expect(testPlayer.aiAttack([[0, 0], [0, 1], [0, 2], [3, 3]])).toStrictEqual([3, 3]);
});

it('Player factory - aiAttack function - Random cell - b', () => {
  const testPlayer = Player();
  expect(testPlayer.aiAttack([[0, 0], [0, 1], [0, 2], [3, 3], [5, 5],
    [1, 0], [1, 1], [1, 2], [1, 3], [1, 5]])).toStrictEqual([1, 3]);
});
