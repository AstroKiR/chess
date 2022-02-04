import checkBoardBoundaries from "./checkBoardBoundaries";

const calculateBishop = (x, y, board) => {
  const bishop = board[x][y];

  const opportunities = [];

  for (let i = x + 1, j = y + 1; checkBoardBoundaries(i, j); i++, j++) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== bishop.color) {
        opportunities.push({ x: i, y: j });
      }
      break;
    }
    opportunities.push({ x: i, y: j });
  }

  for (let i = x - 1, j = y - 1; checkBoardBoundaries(i, j); i--, j--) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== bishop.color) {
        opportunities.push({ x: i, y: j });
      }
      break;
    }
    opportunities.push({ x: i, y: j });
  }

  for (let i = x + 1, j = y - 1; checkBoardBoundaries(i, j); i++, j--) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== bishop.color) {
        opportunities.push({ x: i, y: j });
      }
      break;
    }
    opportunities.push({ x: i, y: j });
  }

  for (let i = x - 1, j = y + 1; checkBoardBoundaries(i, j); i--, j++) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== bishop.color) {
        opportunities.push({ x: i, y: j });
      }
      break;
    }
    opportunities.push({ x: i, y: j });
  }

  opportunities.forEach((opportunity) => {
    board[opportunity.x][opportunity.y].traced = true;
  });
};
export default calculateBishop;
