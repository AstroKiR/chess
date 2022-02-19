import { useEffect, useRef, useState } from "react";
import convertPresetToBoard from "../services/convertPresetToBoard";
import calculateKnight from "../services/calculateKnight";
import clearBoard from "../services/clearBoard";
import calculateBishop from "../services/calculateBishop";
import calculateKing from "../services/calculateKing";
import calculateRook from "../services/calculateRook";
import calculatePawn from "../services/calculatePawn";
import calculateQueen from "../services/calculateQueen";

//ToDo object key: type value: func
const calculateOpportunities = (h, v, board) => {
  let opportunities = null;
  switch (board[h][v].piece.type) {
    case "p":
      opportunities = calculatePawn(h, v, board);
      break;
    case "n":
      opportunities = calculateKnight(h, v, board);
      break;
    case "k":
      opportunities = calculateKing(h, v, board);
      break;
    case "r":
      opportunities = calculateRook(h, v, board);
      break;
    case "b":
      opportunities = calculateBishop(h, v, board);
      break;
    case "q":
      opportunities = calculateQueen(h, v, board);
      break;
  }
  return opportunities;
};

// To-Do read functions some every
const checkTheCheck = (h, v, opportunity, board) => {
  let checkResult = true;
  const oppositCoordinates = [];
  const piece = board[h][v].piece;
  board[opportunity.h][opportunity.v].piece = piece;
  board[h][v].piece = null;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j].piece && board[i][j].piece.color !== piece.color) {
        oppositCoordinates.push({ h: i, v: j });
      }
    }
  }

  oppositCoordinates.forEach((coordinates) => {
    // To-Do object freeze
    const pieceOpportunities = calculateOpportunities(
      coordinates.h,
      coordinates.v,
      board
    );
    pieceOpportunities.forEach((pieceOpportunity) => {
      if (pieceOpportunity.check) {
        checkResult = false;
        return;
      }
    });
  });

  return checkResult;
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

          const opportunities = calculateOpportunities(
            h,
            v,
            structuredClone(board)
          );

          opportunities.forEach((opportunity) => {
            if (checkTheCheck(h, v, opportunity, structuredClone(board)))
              board[opportunity.h][opportunity.v].traced = true;
          });

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
