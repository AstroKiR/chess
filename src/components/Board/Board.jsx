import Cell from "../Cell";
import styles from "./Board.module.css";
import useChessBoard from "./hooks/useChessBoard";

const preset = {
  turn: "w",
  pieces: {
    // a1: { piece: "rw", move: 0 },
    // b1: { piece: "nw", move: 0 },
    // c1: { piece: "bw", move: 0 },
    // d1: { piece: "qw", move: 0 },
    e1: { piece: "kw", move: 0 },
    // f1: { piece: "bw", move: 0 },
    g1: { piece: "nw", move: 0 },
    // h1: { piece: "rw", move: 0 },
    // a2: { piece: "pw", move: 0 },
    // b2: { piece: "pw", move: 0 },
    // c2: { piece: "pw", move: 0 },
    // d2: { piece: "pw", move: 0 },
    // e2: { piece: "pw", move: 0 },
    // f2: { piece: "pw", move: 0 },
    // g2: { piece: "pw", move: 0 },
    // h2: { piece: "pw", move: 0 },

    // a7: { piece: "pb", move: 0 },
    // b7: { piece: "pb", move: 0 },
    // c7: { piece: "pb", move: 0 },
    // d7: { piece: "pb", move: 0 },
    // e7: { piece: "pb", move: 0 },
    // f7: { piece: "pb", move: 0 },
    // g7: { piece: "pb", move: 0 },
    // h7: { piece: "pb", move:  },
    a8: { piece: "rb", move: 0 },
    // b8: { piece: "nb", move: 0 },
    c8: { piece: "bb", move: 0 },
    // d8: { piece: "qb", move: 0 },
    e8: { piece: "kb", move: 0 },
    // f8: { piece: "bb", move: 0 },
    g8: { piece: "nb", move: 0 },
    // h8: { piece: "rb", move: 0 },
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
