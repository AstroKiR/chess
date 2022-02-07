import checkBoardBoundaries from "./checkBoardBoundaries";

const calculateQueen = (h, v, board) => {
  const queen = board[h][v].piece;

  const opportunities = [];

  // diagonal right top
  for (let i = h + 1, j = v + 1; checkBoardBoundaries(i, j); i++, j++) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== queen.color) {
        const check = board[i][j].piece.type === "k" ? true : false;
        opportunities.push({ h: i, v: j, check: check });
      }
      break;
    }
    opportunities.push({ h: i, v: j, check: false });
  }

  // diagonal left bottom
  for (let i = h - 1, j = v - 1; checkBoardBoundaries(i, j); i--, j--) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== queen.color) {
        const check = board[i][j].piece.type === "k" ? true : false;
        opportunities.push({ h: i, v: j, check: check });
      }
      break;
    }
    opportunities.push({ h: i, v: j, check: false });
  }

  // diagonal right bottom
  for (let i = h + 1, j = v - 1; checkBoardBoundaries(i, j); i++, j--) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== queen.color) {
        const check = board[i][j].piece.type === "k" ? true : false;
        opportunities.push({ h: i, v: j, check: check });
      }
      break;
    }
    opportunities.push({ h: i, v: j, check: false });
  }

  // diagonal left top
  for (let i = h - 1, j = v + 1; checkBoardBoundaries(i, j); i--, j++) {
    if (board[i][j].piece) {
      if (board[i][j].piece.color !== queen.color) {
        const check = board[i][j].piece.type === "k" ? true : false;
        opportunities.push({ h: i, v: j, check: check });
      }
      break;
    }
    opportunities.push({ h: i, v: j, check: false });
  }

  // horisontal right
  for (let i = h + 1; checkBoardBoundaries(i, v); i++) {
    if (board[i][v].piece) {
      if (board[i][v].piece.color !== queen.color) {
        const check = board[i][v].piece.type === "k" ? true : false;
        opportunities.push({ h: i, v: v, check: check });
      }
      break;
    }
    opportunities.push({ h: i, v: v, check: false });
  }

  // horisontal left
  for (let i = h - 1; checkBoardBoundaries(i, v); i--) {
    if (board[i][v].piece) {
      if (board[i][v].piece.color !== queen.color) {
        const check = board[i][v].piece.type === "k" ? true : false;
        opportunities.push({ h: i, v: v, check: check });
      }
      break;
    }
    opportunities.push({ h: i, v: v, check: false });
  }

  // vertical top
  for (let i = v + 1; checkBoardBoundaries(h, i); i++) {
    if (board[h][i].piece) {
      if (board[h][i].piece.color !== queen.color) {
        const check = board[h][i].piece.type === "k" ? true : false;
        opportunities.push({ h: h, v: i, check: check });
      }
      break;
    }
    opportunities.push({ h: h, v: i, check: false });
  }

  // vertical bottom
  for (let i = v - 1; checkBoardBoundaries(h, i); i--) {
    if (board[h][i].piece) {
      if (board[h][i].piece.color !== queen.color) {
        const check = board[h][i].piece.type === "k" ? true : false;
        opportunities.push({ h: h, v: i, check: check });
      }
      break;
    }
    opportunities.push({ h: h, v: i, check: false });
  }

  return opportunities;
};

export default calculateQueen;
