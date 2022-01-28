import React, { useEffect, useRef, useState } from "react";

const convertPresetToBoard = (preset) => {
  const board = [
    [
      {
        type: "piece",
        selected: false,
        color: "black",
        piece: { type: "r", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "white",
        piece: { type: "n", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "black",
        piece: { type: "b", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "white",
        piece: { type: "q", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "black",
        piece: { type: "k", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "white",
        piece: { type: "b", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "black",
        piece: { type: "n", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "white",
        piece: { type: "r", color: "white" },
      },
    ],
    [
      {
        type: "piece",
        selected: false,
        color: "white",
        piece: { type: "p", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "black",
        piece: { type: "p", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "white",
        piece: { type: "p", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "black",
        piece: { type: "p", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "white",
        piece: { type: "p", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "black",
        piece: { type: "p", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "white",
        piece: { type: "p", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "black",
        piece: { type: "p", color: "white" },
      },
    ],
    [
      { type: "empty", color: "black" },
      { type: "empty", color: "white" },
      { type: "empty", color: "black" },
      { type: "empty", color: "white" },
      { type: "empty", color: "black" },
      { type: "empty", color: "white" },
      { type: "empty", color: "black" },
      { type: "empty", color: "white" },
    ],
    [
      { type: "empty", color: "white" },
      { type: "empty", color: "black" },
      { type: "empty", color: "white" },
      { type: "empty", color: "black" },
      { type: "empty", color: "white" },
      { type: "empty", color: "black" },
      { type: "empty", color: "white" },
      { type: "empty", color: "black" },
    ],
    [
      { type: "empty", color: "black" },
      { type: "empty", color: "white" },
      { type: "empty", color: "black" },
      { type: "empty", color: "white" },
      { type: "empty", color: "black" },
      { type: "empty", color: "white" },
      { type: "empty", color: "black" },
      { type: "empty", color: "white" },
    ],
    [
      { type: "empty", color: "white" },
      { type: "empty", color: "black" },
      { type: "empty", color: "white" },
      { type: "empty", color: "black" },
      { type: "empty", color: "white" },
      { type: "empty", color: "black" },
      { type: "empty", color: "white" },
      { type: "empty", color: "black" },
    ],
    [
      {
        type: "piece",
        color: "black",
        selected: false,
        piece: { type: "P", color: "black" },
      },
      {
        type: "piece",
        color: "white",
        selected: false,
        piece: { type: "P", color: "black" },
      },
      {
        type: "piece",
        color: "black",
        selected: false,
        piece: { type: "P", color: "black" },
      },
      {
        type: "piece",
        color: "white",
        selected: false,
        piece: { type: "P", color: "black" },
      },
      {
        type: "piece",
        color: "black",
        selected: false,
        piece: { type: "P", color: "black" },
      },
      {
        type: "piece",
        color: "white",
        selected: false,
        piece: { type: "P", color: "black" },
      },
      {
        type: "piece",
        color: "black",
        selected: false,
        piece: { type: "P", color: "black" },
      },
      {
        type: "piece",
        color: "white",
        selected: false,
        piece: { type: "P", color: "black" },
      },
    ],
    [
      {
        type: "piece",
        color: "white",
        selected: false,
        piece: { type: "R", color: "black" },
      },
      {
        type: "piece",
        color: "black",
        selected: false,
        piece: { type: "N", color: "black" },
      },
      {
        type: "piece",
        color: "white",
        selected: false,
        piece: { type: "B", color: "black" },
      },
      {
        type: "piece",
        color: "black",
        selected: false,
        piece: { type: "Q", color: "black" },
      },
      {
        type: "piece",
        color: "white",
        selected: false,
        piece: { type: "K", color: "black" },
      },
      {
        type: "piece",
        color: "black",
        selected: false,
        piece: { type: "B", color: "black" },
      },
      {
        type: "piece",
        color: "white",
        selected: false,
        piece: { type: "N", color: "black" },
      },
      {
        type: "piece",
        color: "black",
        selected: false,
        piece: { type: "R", color: "black" },
      },
    ],
  ];
  return board;
};

const createBoard = (preset) => {
  const board = convertPresetToBoard(preset);
  let setView = null;
  let setTurn = null;
  let setStep = null;

  return {
    cellClick: (x, y, turn, step) => {
      const cell = board[x][y];
      if (step === 0) {
        if (cell.piece && cell.piece.color === turn) {
          board.forEach((line) => {
            line.forEach((cell) => {
              cell.selected = false;
            });
          });
          board[x][y].selected = true;
          setStep(1);
          setView(JSON.parse(JSON.stringify(board)));
        }
      } else if (step === 1) {
        console.log(cell);
      }
    },

    onSetView: (setBoardView) => {
      setView = setBoardView;
      setView(JSON.parse(JSON.stringify(board)));
    },
    onSetTurn: (setBoardTurn) => {
      setTurn = setBoardTurn;
    },
    onSetStep: (setBoardStep) => {
      setStep = setBoardStep;
    },
  };
};

const useChessBoard = () => {
  const [boardView, setBoardView] = useState();
  const [boardTurn, setBoardTurn] = useState("white");
  const [boardStep, setBoardStep] = useState(0);

  const board = useRef(createBoard()).current;

  useEffect(() => {
    board.onSetView(setBoardView);
    board.onSetTurn(setBoardTurn);
    board.onSetStep(setBoardStep);
  }, []);

  const cellClick = (x, y) => {
    board.cellClick(x, y, boardTurn, boardStep);
  };

  return [boardView, boardTurn, cellClick];
};

export default useChessBoard;
