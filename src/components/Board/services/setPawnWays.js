import checkBoardBoundaries from "./checkBoardBoundaries";

const setPawnWays = (x, y, board) => {
  const pawn = board[x][y].piece;

  let additional_cell = null;
  let common_cell = null;
  let attacking_cells = null;

  if (pawn.color === "white") {
    additional_cell = { x: x + 2, y: y };
    common_cell = { x: x + 1, y: y };
    attacking_cells = [
      { x: x + 1, y: y - 1 },
      { x: x + 1, y: y + 1 },
    ];
  } else {
    additional_cell = { x: x - 2, y: y };
    common_cell = { x: x - 1, y: y };
    attacking_cells = [
      { x: x - 1, y: y - 1 },
      { x: x - 1, y: y + 1 },
    ];
  }

  // пешка еще не ходила
  if (
    !pawn.move &&
    checkBoardBoundaries(additional_cell.x, additional_cell.y) &&
    !board[additional_cell.x][additional_cell.y].piece
  ) {
    board[additional_cell.x][additional_cell.y].traced = true;
  }

  // обычный ход
  if (
    checkBoardBoundaries(common_cell.x, common_cell.y) &&
    !board[common_cell.x][common_cell.y].piece
  ) {
    board[common_cell.x][common_cell.y].traced = true;
  }

  // возможность взятия слева
  if (
    checkBoardBoundaries(attacking_cells[0].x, attacking_cells[0].y) &&
    board[attacking_cells[0].x][attacking_cells[0].y].piece &&
    board[attacking_cells[0].x][attacking_cells[0].y].piece.color !== pawn.color
  ) {
    board[attacking_cells[0].x][attacking_cells[0].y].traced = true;
  }

  // возможность взятия справа
  if (
    checkBoardBoundaries(attacking_cells[1].x, attacking_cells[1].y) &&
    board[attacking_cells[1].x][attacking_cells[1].y].piece &&
    board[attacking_cells[1].x][attacking_cells[1].y].piece.color !== pawn.color
  ) {
    board[attacking_cells[1].x][attacking_cells[1].y].traced = true;
  }
};

export default setPawnWays;
