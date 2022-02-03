import checkBoardBoundaries from "./checkBoardBoundaries";

const calculateKing = (x, y, board) => {
  const king = board[x][y].piece;
  const opportunities = [
    { x: x - 1, y: y - 1 },
    { x: x - 1, y: y },
    { x: x - 1, y: y + 1 },
    { x: x, y: y + 1 },
    { x: x, y: y - 1 },
    { x: x + 1, y: y - 1 },
    { x: x + 1, y: y },
    { x: x + 1, y: y + 1 },
  ];

  opportunities.forEach((opportunitie) => {
    if (
      checkBoardBoundaries(opportunitie.x, opportunitie.y) &&
      (!board[opportunitie.x][opportunitie.y].piece ||
        board[opportunitie.x][opportunitie.y].piece.color !== king.color)
    ) {
      board[opportunitie.x][opportunitie.y].traced = true;
    }
  });
};

export default calculateKing;
