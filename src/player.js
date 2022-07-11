const Player = (board) => {
  const aiAttack = () => {
    const randomPos = Math.floor(Math.random() * 99);

    return randomPos;
  };
  return { board, aiAttack };
};

export { Player };
