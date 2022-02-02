import Cell from "../Cell";
import styles from "./Board.module.css";
import useChessBoard from "./hooks/useChessBoard";

const preset = {
  turn: "w",
  pieces: {
    a1: { piece: "kw", move: 0 },
    d1: { piece: "nw", move: 0 },
    d8: { piece: "kb", move: 0 },
    a8: { piece: "nb", move: 0 },
  },
};

const Board = () => {
  const [boardView, boardTurn, cellClick] = useChessBoard(preset);

  return (
    <>
      <div>{boardTurn}</div>
      <div className={styles.board}>
        {boardView?.map((h, x) => {
          return h.map(({ traced, piece, color, selected }, y) => {
            return (
              <Cell
                selected={selected}
                traced={traced}
                piece={piece}
                key={`${x}${y}`}
                x={x}
                y={y}
                color={color}
                onClick={cellClick}
              />
            );
          });
        })}
      </div>
    </>
  );
};

export default Board;
