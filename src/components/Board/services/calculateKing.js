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
    if (checkBoardBoundaries(opportunity.h, opportunity.v)) {
      if (!board[opportunity.h][opportunity.v].piece) {
        real_opportunities.push({
          h: opportunity.h,
          v: opportunity.v,
          check: false,
        });
      } else if (
        board[opportunity.h][opportunity.v].piece.color !== king.color
      ) {
        const check =
          board[opportunity.h][opportunity.v].piece.type === "k" ? true : false;
        real_opportunities.push({
          h: opportunity.h,
          v: opportunity.v,
          check: check,
        });
      }
    }
  });
  return real_opportunities;
};

export default calculateKing;
