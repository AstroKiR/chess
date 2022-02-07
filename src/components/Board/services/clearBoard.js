const clearBoard = (board) => {
  for (let h = 0; h < 8; h++) {
    for (let v = 0; v < 8; v++) {
      board[h][v].traced = false;
      board[h][v].selected = false;
    }
  }
};

export default clearBoard;
