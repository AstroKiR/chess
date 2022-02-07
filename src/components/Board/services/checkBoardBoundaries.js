const checkBoardBoundaries = (h, v) => {
  return h >= 0 && h < 8 && v >= 0 && v < 8 ? true : false;
};

export default checkBoardBoundaries;
