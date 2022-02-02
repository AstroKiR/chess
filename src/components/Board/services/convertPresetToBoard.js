const convertPresetToBoard = (preset) => {
  const board = new Array(8);
  for (let x = 0; x < board.length; x++) {
    board[x] = new Array(8);
    for (let y = 0; y < board[x].length; y++) {
      if ((x + y) % 2) {
        board[x][y] = { color: "w", piece: null, selected: false };
      } else {
        board[x][y] = { color: "b", piece: null, selected: false };
      }
    }
  }

  for (var key in preset.pieces) {
    const x = key.charAt(0).charCodeAt() - 97;
    const y = key.charAt(1).charCodeAt() - 49;

    board[y][x].piece = {
      type: preset.pieces[key].piece.charAt(0),
      color: preset.pieces[key].piece.charAt(1),
      move: preset.pieces[key].move,
    };
  }

  return board;
};

export default convertPresetToBoard;
