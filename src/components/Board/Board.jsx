import Cell from "../Cell";
import styles from "./Board.module.css";
import useChessBoard from "./hooks/useChessBoard";

const Board = () => {
  const [boardView, boardTurn, cellClick] = useChessBoard();

  return (
    <>
      <div>{boardTurn}</div>
      <div className={styles.board}>
        {boardView?.map((h, x) => {
          return h.map(({ type, piece, color, selected }, y) => {
            return (
              <Cell
                type={type}
                selected={selected}
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
