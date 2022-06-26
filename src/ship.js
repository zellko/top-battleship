const Ship = (length) => {
  const shipArray = new Array(length);
  shipArray.fill('o');

  const hit = (n) => {
    if (n > shipArray.length || n === 0 || n < 0) return 'positionError';
    shipArray[n - 1] = 'x';
    return shipArray;
  };

  const isSunk = () => {
    if (shipArray.includes('o')) {
      return false;
    }
    return true;
  };

  return { shipArray, hit, isSunk };
};

export { Ship };
