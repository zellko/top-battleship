const Player = (board) => {
  const aiAttack = (legalPosition) => {
    const numberOfLegalPos = legalPosition.length;

    const r = Math.floor(Math.random() * numberOfLegalPos);

    return legalPosition[r];
  };
  return { board, aiAttack };
};

export { Player };
