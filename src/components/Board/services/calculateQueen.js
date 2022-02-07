import checkBoardBoundaries from "./checkBoardBoundaries";

const calculateQueen = (h, v, board) => {
  const queen = board[h][v].piece;

  const opportunities = [];

  // diagonal right top
  for (let i = h + 1, j = v + 1; checkBoardBoundaries(i, j); i++, j++) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== queen.color) {
        opportunities.push({ h: i, v: j });
      }
      break;
    }
    opportunities.push({ h: i, v: j });
  }

  // diagonal left bottom
  for (let i = h - 1, j = v - 1; checkBoardBoundaries(i, j); i--, j--) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== queen.color) {
        opportunities.push({ h: i, v: j });
      }
      break;
    }
    opportunities.push({ h: i, v: j });
  }

  // diagonal right bottom
  for (let i = h + 1, j = v - 1; checkBoardBoundaries(i, j); i++, j--) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== queen.color) {
        opportunities.push({ h: i, v: j });
      }
      break;
    }
    opportunities.push({ h: i, v: j });
  }

  // diagonal left top
  for (let i = h - 1, j = v + 1; checkBoardBoundaries(i, j); i--, j++) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== queen.color) {
        opportunities.push({ h: i, v: j });
      }
      break;
    }
    opportunities.push({ h: i, v: j });
  }

  // horisontal right
  for (let i = h + 1; checkBoardBoundaries(i, v); i++) {
    if (board[i][v].piece) {
      if (board[i][v].piece.color !== queen.color) {
        opportunities.push({ h: i, v: v });
      }
      break;
    }
    opportunities.push({ h: i, v: v });
  }

  // horisontal left
  for (let i = h - 1; checkBoardBoundaries(i, v); i--) {
    if (board[i][v].piece) {
      if (board[i][v].piece.color !== queen.color) {
        opportunities.push({ h: i, v: v });
      }
      break;
    }
    opportunities.push({ h: i, v: v });
  }

  // vertical top
  for (let i = v + 1; checkBoardBoundaries(h, i); i++) {
    if (board[h][i].piece) {
      if (board[h][i].piece.color !== queen.color) {
        opportunities.push({ h: h, v: i });
      }
      break;
    }
    opportunities.push({ h: h, v: i });
  }

  // vertical bottom
  for (let i = v - 1; checkBoardBoundaries(h, i); i--) {
    if (board[h][i].piece) {
      if (board[h][i].piece.color !== queen.color) {
        opportunities.push({ h: h, v: i });
      }
      break;
    }
    opportunities.push({ h: h, v: i });
  }

  opportunities.forEach((opportunity) => {
    board[opportunity.h][opportunity.v].traced = true;
  });
};

export default calculateQueen;
