const clearBoard = (board) => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      board[i][j].traced = false;
      board[i][j].selected = false;
    }
  }
};

export default clearBoard;
