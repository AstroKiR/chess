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

  // pawn did not move
  if (
    !pawn.move &&
    checkBoardBoundaries(additional_cell.h, additional_cell.v) &&
    !board[additional_cell.h][additional_cell.v].piece
  ) {
    real_opportunities.push({
      h: additional_cell.h,
      v: additional_cell.v,
      check: false,
    });
  }

  // pawn moved
  if (
    checkBoardBoundaries(common_cell.h, common_cell.v) &&
    !board[common_cell.h][common_cell.v].piece
  ) {
    real_opportunities.push({
      h: common_cell.h,
      v: common_cell.v,
      check: false,
    });
  }

  // left hit
  if (
    checkBoardBoundaries(attacking_cells[0].h, attacking_cells[0].v) &&
    board[attacking_cells[0].h][attacking_cells[0].v].piece &&
    board[attacking_cells[0].h][attacking_cells[0].v].piece.color !== pawn.color
  ) {
    const check =
      board[attacking_cells[0].h][attacking_cells[0].v].piece.type === "k"
        ? true
        : false;
    real_opportunities.push({
      h: attacking_cells[0].h,
      v: attacking_cells[0].v,
      check: check,
    });
  }

  // right hit
  if (
    checkBoardBoundaries(attacking_cells[1].h, attacking_cells[1].v) &&
    board[attacking_cells[1].h][attacking_cells[1].v].piece &&
    board[attacking_cells[1].h][attacking_cells[1].v].piece.color !== pawn.color
  ) {
    const check =
      board[attacking_cells[1].h][attacking_cells[1].v].piece.type === "k"
        ? true
        : false;
    real_opportunities.push({
      h: attacking_cells[1].h,
      v: attacking_cells[1].v,
      check: check,
    });
  }

  return real_opportunities;
};

export default setPawnWays;
