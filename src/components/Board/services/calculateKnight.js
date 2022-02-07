import checkBoardBoundaries from "./checkBoardBoundaries";

const calculateKnight = (h, v, board) => {
  const real_opportunities = [];
  const potential_opportunities = [
    { h: h - 1, v: v - 2 },
    { h: h - 1, v: v + 2 },
    { h: h + 1, v: v + 2 },
    { h: h + 1, v: v - 2 },
    { h: h - 2, v: v - 1 },
    { h: h - 2, v: v + 1 },
    { h: h + 2, v: v + 1 },
    { h: h + 2, v: v - 1 },
  ];

  potential_opportunities.forEach((opportunity) => {
    if (checkBoardBoundaries(opportunity.h, opportunity.v)) {
      if (
        !board[opportunity.h][opportunity.v].piece ||
        board[opportunity.h][opportunity.v].piece.color !==
          board[h][v].piece.color
      ) {
        real_opportunities.push({ h: opportunity.h, v: opportunity.v });
      }
    }
  });
  return real_opportunities;
};

export default calculateKnight;
