import checkBoardBoundaries from "./checkBoardBoundaries";

const calculateRook = (h, v, board) => {
  const rook = board[h][v].piece;

  const opportunities = [];

  for (let i = h + 1; i < 8; i++) {
    if (board[i][v].piece) {
      if (board[i][v].piece.color !== rook.color) {
        opportunities.push({ h: i, v: v });
      }
      break;
    }
    opportunities.push({ h: i, v: v });
  }

  for (let i = h - 1; i >= 0; i--) {
    if (board[i][v].piece) {
      if (board[i][v].piece.color !== rook.color) {
        opportunities.push({ h: i, v: v });
      }
      break;
    }
    opportunities.push({ h: i, v: v });
  }

  for (let i = v + 1; i < 8; i++) {
    if (board[h][i].piece) {
      if (board[h][i].piece.color !== rook.color) {
        opportunities.push({ h: h, v: i });
      }
      break;
    }
    opportunities.push({ h: h, v: i });
  }

  for (let i = v - 1; i >= 0; i--) {
    if (board[h][i].piece) {
      if (board[h][i].piece.color !== rook.color) {
        opportunities.push({ h: h, v: i });
      }
      break;
    }
    opportunities.push({ h: h, v: i });
  }

  return opportunities;
};

export default calculateRook;
