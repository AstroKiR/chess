import { useEffect, useRef, useState } from "react";
import convertPresetToBoard from "../services/convertPresetToBoard";
import calculateKnight from "../services/calculateKnight";
import clearBoard from "../services/clearBoard";
import calculatePawn from "../services/calculatePawn";
import calculateKing from "../services/calculateKing";
import calculateRook from "../services/calculateRook";
import calculateBishop from "../services/calculateBishop";
import calculateQueen from "../services/calculateQueen";

//ToDo object key: type value: func
const calculateOpportunities = (h, v, board) => {
  switch (board[h][v].piece.type) {
    case "p":
      calculatePawn(h, v, board);
      break;
    case "n":
      calculateKnight(h, v, board);
      break;
    case "k":
      calculateKing(h, v, board);
      break;
    case "r":
      calculateRook(h, v, board);
      break;
    case "b":
      calculateBishop(h, v, board);
      break;
    case "q":
      calculateQueen(h, v, board);
      break;
  }
};

const createBoard = (preset) => {
  const board = convertPresetToBoard(preset);
  let setView = null;
  let setTurn = null;
  let setCurrentPiece = null;

  return {
    cellClick: (h, v, turn, currentPiece) => {
      // first step
      if (!currentPiece) {
        if (board[h][v].piece && board[h][v].piece.color === turn) {
          board[h][v].selected = true;
          calculateOpportunities(h, v, board);
          setCurrentPiece({ h, v });
          setView(JSON.parse(JSON.stringify(board)));
        }
      }
      // second step
      else {
        if (board[h][v].traced) {
          board[h][v].piece = board[currentPiece.h][currentPiece.v].piece;
          board[h][v].piece.move += 1;
          board[currentPiece.h][currentPiece.v].piece = null;
          setTurn((turn) => (turn === "w" ? "b" : "w"));
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

const useChessBoard = (preset) => {
  const [boardView, setBoardView] = useState();
  const [boardTurn, setBoardTurn] = useState(preset["turn"]);
  const [boardCurrentPiece, setBoardCurrentPiece] = useState(null);

  const board = useRef(createBoard(preset)).current;

  useEffect(() => {
    board.onSetView(setBoardView);
    board.onSetTurn(setBoardTurn);
    board.onSetBoardCurrentPiece(setBoardCurrentPiece);
  }, []);

  const cellClick = (h, v) => {
    board.cellClick(h, v, boardTurn, boardCurrentPiece);
  };

  return [boardView, boardTurn, cellClick];
};

export default useChessBoard;
