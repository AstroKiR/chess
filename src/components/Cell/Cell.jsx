import styles from "./Cell.module.css";
import Piece from "../Piece";

const Cell = ({ selected, piece, color, x, y, onClick }) => {
  const selected_cell = selected ? styles.selected : null;
  return (
    <div
      className={`${styles[color]} ${selected_cell}`}
      onClick={() => onClick(x, y)}
      key={`${x}${y}`}
    >
      {piece ? <Piece piece={piece} /> : ""}
    </div>
  );
};

export default Cell;
