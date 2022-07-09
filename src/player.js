const Player = (board) => {
  const aiAttack = (legalPosition) => {
    const numberOfLegalPos = legalPosition.length;

    const randomPos = Math.floor(Math.random() * numberOfLegalPos);

    return randomPos;
  };
  return { board, aiAttack };
};

export { Player };
