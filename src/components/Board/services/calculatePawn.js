import checkBoardBoundaries from "./checkBoardBoundaries";

const setPawnWays = (h, v, board) => {
  const pawn = board[h][v].piece;

  const real_opportunities = [];

  let additional_cell = null;
  let common_cell = null;
  let attacking_cells = null;

  if (pawn.color === "w") {
    additional_cell = { h: h + 2, v: v };
    common_cell = { h: h + 1, v: v };
    attacking_cells = [
      { h: h + 1, v: v - 1 },
      { h: h + 1, v: v + 1 },
    ];
  } else {
    additional_cell = { h: h - 2, v: v };
    common_cell = { h: h - 1, v: v };
    attacking_cells = [
      { h: h - 1, v: v - 1 },
      { h: h - 1, v: v + 1 },
    ];
  }

  // пешка еще не ходила
  if (
    !pawn.move &&
    checkBoardBoundaries(additional_cell.h, additional_cell.v) &&
    !board[additional_cell.h][additional_cell.v].piece
  ) {
    real_opportunities.push({ h: additional_cell.h, v: additional_cell.v });
  }

  // обычный ход
  if (
    checkBoardBoundaries(common_cell.h, common_cell.v) &&
    !board[common_cell.h][common_cell.v].piece
  ) {
    real_opportunities.push({ h: common_cell.h, v: common_cell.v });
  }

  // возможность взятия слева
  if (
    checkBoardBoundaries(attacking_cells[0].h, attacking_cells[0].v) &&
    board[attacking_cells[0].h][attacking_cells[0].v].piece &&
    board[attacking_cells[0].h][attacking_cells[0].v].piece.color !== pawn.color
  ) {
    real_opportunities.push({
      h: attacking_cells[0].h,
      v: attacking_cells[0].v,
    });
  }

  // возможность взятия справа
  if (
    checkBoardBoundaries(attacking_cells[1].h, attacking_cells[1].v) &&
    board[attacking_cells[1].h][attacking_cells[1].v].piece &&
    board[attacking_cells[1].h][attacking_cells[1].v].piece.color !== pawn.color
  ) {
    real_opportunities.push({
      h: attacking_cells[1].h,
      v: attacking_cells[1].v,
    });
  }
  return real_opportunities;
};

export default setPawnWays;
