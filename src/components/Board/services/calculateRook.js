import checkBoardBoundaries from "./checkBoardBoundaries";

const calculateRook = (h, v, board) => {
  const rook = board[h][v].piece;

  const opportunities = [];

  for (let i = h + 1; i < 8; i++) {
    if (board[i][v].piece) {
      if (board[i][v].piece.color !== rook.color) {
        let check = false;
        if (board[i][v].piece.type === "k") check = true;
        opportunities.push({ h: i, v: v, check: check });
      }
      break;
    }
    opportunities.push({ h: i, v: v, check: false });
  }

  for (let i = h - 1; i >= 0; i--) {
    if (board[i][v].piece) {
      if (board[i][v].piece.color !== rook.color) {
        let check = false;
        if (board[i][v].piece.type === "k") check = true;
        opportunities.push({ h: i, v: v, check: check });
      }
      break;
    }
    opportunities.push({ h: i, v: v, check: false });
  }

  for (let i = v + 1; i < 8; i++) {
    if (board[h][i].piece) {
      if (board[h][i].piece.color !== rook.color) {
        let check = false;
        if (board[h][i].piece.type === "k") check = true;
        opportunities.push({ h: h, v: i, check: check });
      }
      break;
    }
    opportunities.push({ h: h, v: i, check: false });
  }

  for (let i = v - 1; i >= 0; i--) {
    if (board[h][i].piece) {
      if (board[h][i].piece.color !== rook.color) {
        let check = false;
        if (board[h][i].piece.type === "k") check = true;
        opportunities.push({ h: h, v: i, check: check });
      }
      break;
    }
    opportunities.push({ h: h, v: i, check: false });
  }

  return opportunities;
};

export default calculateRook;
