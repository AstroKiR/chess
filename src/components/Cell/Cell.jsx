import styles from "./Cell.module.css";
import Piece from "../Piece";

const Cell = ({ selected, traced, piece, color, x, y, onClick }) => {
  const selected_cell = selected ? styles.selected : "";
  const traced_cell = traced ? styles.traced : "";
  return (
    <div
      //ToDo classnames lib
      className={`${styles[color]} ${selected_cell} ${traced_cell}`}
      onClick={() => onClick(x, y)}
    >
      {piece ? <Piece piece={piece} /> : ""}
    </div>
  );
};

export default Cell;
