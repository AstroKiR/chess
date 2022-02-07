import checkBoardBoundaries from "./checkBoardBoundaries";

const calculateBishop = (h, v, board) => {
  const bishop = board[h][v].piece;

  const opportunities = [];

  for (let i = h + 1, j = v + 1; checkBoardBoundaries(i, j); i++, j++) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== bishop.color) {
        let check = false;
        if (board[i][j].piece.type === "k") check = true;
        opportunities.push({ h: i, v: j, check: check });
      }
      break;
    }
    opportunities.push({ h: i, v: j, check: false });
  }

  for (let i = h - 1, j = v - 1; checkBoardBoundaries(i, j); i--, j--) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== bishop.color) {
        let check = false;
        if (board[i][j].piece.type === "k") check = true;
        opportunities.push({ h: i, v: j, check: check });
      }
      break;
    }
    opportunities.push({ h: i, v: j, check: false });
  }

  for (let i = h + 1, j = v - 1; checkBoardBoundaries(i, j); i++, j--) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== bishop.color) {
        let check = false;
        if (board[i][j].piece.type === "k") check = true;
        opportunities.push({ h: i, v: j, check: check });
      }
      break;
    }
    opportunities.push({ h: i, v: j, check: false });
  }

  for (let i = h - 1, j = v + 1; checkBoardBoundaries(i, j); i--, j++) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== bishop.color) {
        let check = false;
        if (board[i][j].piece.type === "k") check = true;
        opportunities.push({ h: i, v: j, check: check });
      }
      break;
    }
    opportunities.push({ h: i, v: j, check: false });
  }

  return opportunities;
};
export default calculateBishop;
