import checkBoardBoundaries from "./checkBoardBoundaries";

const calculateBishop = (h, v, board) => {
  const bishop = board[h][v].piece;

  const opportunities = [];

  for (let i = h + 1, j = v + 1; checkBoardBoundaries(i, j); i++, j++) {
    if (board[i][j].piece) {
      console.log(board[i][j]);
      if (board[i][j].piece.color !== bishop.color) {
        opportunities.push({ h: i, v: j });
      }
      break;
    }
    opportunities.push({ h: i, v: j });
  }

  for (let i = h - 1, j = v - 1; checkBoardBoundaries(i, j); i--, j--) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== bishop.color) {
        opportunities.push({ h: i, v: j });
      }
      break;
    }
    opportunities.push({ h: i, v: j });
  }

  for (let i = h + 1, j = v - 1; checkBoardBoundaries(i, j); i++, j--) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== bishop.color) {
        opportunities.push({ h: i, v: j });
      }
      break;
    }
    opportunities.push({ h: i, v: j });
  }

  for (let i = h - 1, j = v + 1; checkBoardBoundaries(i, j); i--, j++) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== bishop.color) {
        opportunities.push({ h: i, v: j });
      }
      break;
    }
    opportunities.push({ h: i, v: j });
  }

  return opportunities;
};
export default calculateBishop;
