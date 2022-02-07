import checkBoardBoundaries from "./checkBoardBoundaries";

const calculateKing = (h, v, board) => {
  const king = board[h][v].piece;
  const real_opportunities = [];
  const potential_opportunities = [
    { h: h - 1, v: v - 1 },
    { h: h - 1, v: v },
    { h: h - 1, v: v + 1 },
    { h: h, v: v + 1 },
    { h: h, v: v - 1 },
    { h: h + 1, v: v - 1 },
    { h: h + 1, v: v },
    { h: h + 1, v: v + 1 },
  ];

  potential_opportunities.forEach((opportunity) => {
    if (
      checkBoardBoundaries(opportunity.h, opportunity.v) &&
      (!board[opportunity.h][opportunity.v].piece ||
        board[opportunity.h][opportunity.v].piece.color !== king.color)
    ) {
      real_opportunities.push({
        h: opportunity.h,
        v: opportunity.v,
        check: false,
      });
    }
  });
  return real_opportunities;
};

export default calculateKing;
