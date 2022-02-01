import checkBoardBoundaries from "./checkBoardBoundaries";

const setKnightWays = (x, y, board) => {
  const way = [
    { x: x - 1, y: y - 2 },
    { x: x - 1, y: y + 2 },
    { x: x + 1, y: y + 2 },
    { x: x + 1, y: y - 2 },
    { x: x - 2, y: y - 1 },
    { x: x - 2, y: y + 1 },
    { x: x + 2, y: y + 1 },
    { x: x + 2, y: y - 1 },
  ];

  way.forEach((cell) => {
    if (checkBoardBoundaries(cell.x, cell.y)) {
      console.log(cell);
      if (
        !board[cell.x][cell.y].piece ||
        board[cell.x][cell.y].piece.color !== board[x][y].piece.color
      ) {
        board[cell.x][cell.y].traced = true;
      }
    }
  });
};

export default setKnightWays;
