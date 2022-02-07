const convertPresetToBoard = (preset) => {
  const board = new Array(8);
  for (let horisontal = 0; horisontal < board.length; horisontal++) {
    board[horisontal] = new Array(8);

    for (let vertical = 0; vertical < board[horisontal].length; vertical++) {
      if ((horisontal + vertical) % 2) {
        board[horisontal][vertical] = {
          color: "w",
          piece: null,
          selected: false,
        };
      } else {
        board[horisontal][vertical] = {
          color: "b",
          piece: null,
          selected: false,
        };
      }
    }
  }

  for (var key in preset.pieces) {
    const vertical = key.charAt(0).charCodeAt() - 97;
    const horisontal = key.charAt(1).charCodeAt() - 49;

    board[horisontal][vertical].piece = {
      type: preset.pieces[key].piece.charAt(0),
      color: preset.pieces[key].piece.charAt(1),
      move: preset.pieces[key].move,
    };
  }

  return board;
};

export default convertPresetToBoard;
