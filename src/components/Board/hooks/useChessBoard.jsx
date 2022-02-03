import { useEffect, useRef, useState } from "react";
import convertPresetToBoard from "../services/convertPresetToBoard";
import setKnightWays from "../services/setKnightWays";
import clearBoard from "../services/clearBoard";
import setPawnWays from "../services/setPawnWays";
import calculateKing from "../services/calculateKing";
import calculateRook from "../services/calculateRook";

const calculateOpportunities = (x, y, board) => {
  switch (board[x][y].piece.type) {
    case "p":
      setPawnWays(x, y, board);
      break;
    case "n":
      setKnightWays(x, y, board);
      break;
    case "k":
      calculateKing(x, y, board);
      break;
    case "r":
      calculateRook(x, y, board);
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
          calculateOpportunities(x, y, board);
          setCurrentPiece({ x: x, y: y });
          setView(JSON.parse(JSON.stringify(board)));
        }
      }
      // second step
      else {
        if (board[x][y].traced) {
          board[x][y].piece = board[currentPiece.x][currentPiece.y].piece;
          board[x][y].piece.move += 1;
          board[currentPiece.x][currentPiece.y].piece = null;
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

  const cellClick = (x, y) => {
    board.cellClick(x, y, boardTurn, boardCurrentPiece);
  };

  return [boardView, boardTurn, cellClick];
};

export default useChessBoard;
