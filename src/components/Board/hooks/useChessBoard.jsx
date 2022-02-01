import { useEffect, useRef, useState } from "react";
import setKnightWays from "../services/setKnightWays";
import clearBoard from "../services/clearBoard";

const convertPresetToBoard = (preset) => {
  const board = [
    [
      {
        type: "piece",
        selected: false,
        color: "black",
        traced: false,
        piece: { type: "r", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "white",
        traced: false,
        piece: { type: "n", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "black",
        traced: false,
        piece: { type: "b", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "white",
        traced: false,
        piece: { type: "q", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "black",
        traced: false,
        piece: { type: "k", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "white",
        traced: false,
        piece: { type: "b", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "black",
        traced: false,
        piece: { type: "n", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "white",
        traced: false,
        piece: { type: "r", color: "white" },
      },
    ],
    [
      {
        type: "piece",
        selected: false,
        color: "white",
        traced: false,
        piece: { type: "p", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "black",
        traced: false,
        piece: { type: "p", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "white",
        traced: false,
        piece: { type: "p", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "black",
        traced: false,
        piece: { type: "p", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "white",
        traced: false,
        piece: { type: "p", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "black",
        traced: false,
        piece: { type: "p", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "white",
        traced: false,
        piece: { type: "p", color: "white" },
      },
      {
        type: "piece",
        selected: false,
        color: "black",
        traced: false,
        piece: { type: "p", color: "white" },
      },
    ],
    [
      { type: "empty", color: "black", piece: null, selected: false },
      { type: "empty", color: "white", piece: null, selected: false },
      { type: "empty", color: "black", piece: null, selected: false },
      { type: "empty", color: "white", piece: null, selected: false },
      { type: "empty", color: "black", piece: null, selected: false },
      { type: "empty", color: "white", piece: null, selected: false },
      { type: "empty", color: "black", piece: null, selected: false },
      { type: "empty", color: "white", piece: null, selected: false },
    ],
    [
      { type: "empty", color: "white", piece: null, selected: false },
      { type: "empty", color: "black", piece: null, selected: false },
      { type: "empty", color: "white", piece: null, selected: false },
      { type: "empty", color: "black", piece: null, selected: false },
      { type: "empty", color: "white", piece: null, selected: false },
      { type: "empty", color: "black", piece: null, selected: false },
      { type: "empty", color: "white", piece: null, selected: false },
      { type: "empty", color: "black", piece: null, selected: false },
    ],
    [
      { type: "empty", color: "black", piece: null, selected: false },
      { type: "empty", color: "white", piece: null, selected: false },
      { type: "empty", color: "black", piece: null, selected: false },
      { type: "empty", color: "white", piece: null, selected: false },
      { type: "empty", color: "black", piece: null, selected: false },
      { type: "empty", color: "white", piece: null, selected: false },
      { type: "empty", color: "black", piece: null, selected: false },
      { type: "empty", color: "white", piece: null, selected: false },
    ],
    [
      { type: "empty", color: "white", piece: null, selected: false },
      { type: "empty", color: "black", piece: null, selected: false },
      { type: "empty", color: "white", piece: null, selected: false },
      { type: "empty", color: "black", piece: null, selected: false },
      { type: "empty", color: "white", piece: null, selected: false },
      { type: "empty", color: "black", piece: null, selected: false },
      { type: "empty", color: "white", piece: null, selected: false },
      { type: "empty", color: "black", piece: null, selected: false },
    ],
    [
      {
        type: "piece",
        color: "black",
        selected: false,
        traced: false,
        piece: { type: "p", color: "black" },
      },
      {
        type: "piece",
        color: "white",
        selected: false,
        traced: false,
        piece: { type: "p", color: "black" },
      },
      {
        type: "piece",
        color: "black",
        selected: false,
        traced: false,
        piece: { type: "p", color: "black" },
      },
      {
        type: "piece",
        color: "white",
        selected: false,
        traced: false,
        piece: { type: "p", color: "black" },
      },
      {
        type: "piece",
        color: "black",
        selected: false,
        traced: false,
        piece: { type: "p", color: "black" },
      },
      {
        type: "piece",
        color: "white",
        selected: false,
        traced: false,
        piece: { type: "p", color: "black" },
      },
      {
        type: "piece",
        color: "black",
        selected: false,
        traced: false,
        piece: { type: "p", color: "black" },
      },
      {
        type: "piece",
        color: "white",
        selected: false,
        traced: false,
        piece: { type: "p", color: "black" },
      },
    ],
    [
      {
        type: "piece",
        color: "white",
        selected: false,
        traced: false,
        piece: { type: "r", color: "black" },
      },
      {
        type: "piece",
        color: "black",
        selected: false,
        traced: false,
        piece: { type: "n", color: "black" },
      },
      {
        type: "piece",
        color: "white",
        selected: false,
        traced: false,
        piece: { type: "b", color: "black" },
      },
      {
        type: "piece",
        color: "black",
        selected: false,
        traced: false,
        piece: { type: "q", color: "black" },
      },
      {
        type: "piece",
        color: "white",
        selected: false,
        traced: false,
        piece: { type: "k", color: "black" },
      },
      {
        type: "piece",
        color: "black",
        selected: false,
        traced: false,
        piece: { type: "b", color: "black" },
      },
      {
        type: "piece",
        color: "white",
        selected: false,
        traced: false,
        piece: { type: "n", color: "black" },
      },
      {
        type: "piece",
        color: "black",
        selected: false,
        traced: false,
        piece: { type: "r", color: "black" },
      },
    ],
  ];
  return board;
};

const calculateWays = (x, y, board) => {
  switch (board[x][y].piece.type) {
    case "n":
      setKnightWays(x, y, board);
      break;
  }
};

const createBoard = (preset) => {
  const board = convertPresetToBoard(preset);
  let setView = null;
  let setTurn = null;
  let setCurrentPiece = null;

  return {
    cellClick: (x, y, turn, currentPiece) => {
      // first step
      if (!currentPiece) {
        if (board[x][y].piece && board[x][y].piece.color === turn) {
          board[x][y].selected = true;
          calculateWays(x, y, board);
          setCurrentPiece({ x: x, y: y });
          setView(JSON.parse(JSON.stringify(board)));
        }
      }
      // second step
      else {
        if (board[x][y].traced) {
          board[x][y].piece = board[currentPiece.x][currentPiece.y].piece;
          board[currentPiece.x][currentPiece.y].piece = null;
          setTurn((turn) => (turn === "white" ? "black" : "white"));
        }
        clearBoard(board);
        setCurrentPiece(null);
        setView(JSON.parse(JSON.stringify(board)));
      }
    },

    onSetView: (setBoardView) => {
      setView = setBoardView;
      setView(JSON.parse(JSON.stringify(board)));
    },
    onSetTurn: (setBoardTurn) => {
      setTurn = setBoardTurn;
    },
    onSetBoardCurrentPiece: (setBoardCurrentPiece) => {
      setCurrentPiece = setBoardCurrentPiece;
    },
  };
};

const useChessBoard = () => {
  const [boardView, setBoardView] = useState();
  const [boardTurn, setBoardTurn] = useState("white");
  const [boardCurrentPiece, setBoardCurrentPiece] = useState(null);

  const board = useRef(createBoard()).current;

  useEffect(() => {
    board.onSetView(setBoardView);
    board.onSetTurn(setBoardTurn);
    board.onSetBoardCurrentPiece(setBoardCurrentPiece);
  }, []);

  const cellClick = (x, y) => {
    board.cellClick(x, y, boardTurn, boardCurrentPiece);
  };

  return [boardView, boardTurn, cellClick];
};

export default useChessBoard;
