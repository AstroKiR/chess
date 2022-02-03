import checkBoardBoundaries from "./checkBoardBoundaries";

const calculateRook = (x, y, board) => {
  const rook = board[x][y].piece;

  const opportunities = [];

  for (let i = x + 1; i < 8; i++) {
    if (board[i][y].piece) {
      if (board[i][y].piece.color !== rook.color) {
        opportunities.push({ x: i, y: y });
      }
      break;
    }
    opportunities.push({ x: i, y: y });
  }

  for (let i = x - 1; i >= 0; i--) {
    if (board[i][y].piece) {
      if (board[i][y].piece.color !== rook.color) {
        opportunities.push({ x: i, y: y });
      }
      break;
    }
    opportunities.push({ x: i, y: y });
  }

  for (let i = y + 1; i < 8; i++) {
    if (board[x][i].piece) {
      if (board[x][i].piece.color !== rook.color) {
        opportunities.push({ x: x, y: i });
      }
      break;
    }
    opportunities.push({ x: x, y: i });
  }

  for (let i = y - 1; i >= 0; i--) {
    if (board[x][i].piece) {
      if (board[x][i].piece.color !== rook.color) {
        opportunities.push({ x: x, y: i });
      }
      break;
    }
    opportunities.push({ x: x, y: i });
  }

  opportunities.forEach((opportunity) => {
    board[opportunity.x][opportunity.y].traced = true;
  });
};

export default calculateRook;
