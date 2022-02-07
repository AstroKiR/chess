import styles from "./Cell.module.css";
import Piece from "../Piece";

const Cell = ({ selected, traced, piece, color, h, v, onClick }) => {
  const selected_cell = selected ? styles.selected : "";
  const traced_cell = traced ? styles.traced : "";
  return (
    <div
      //ToDo classnames lib
      id={`${h} ${v}`}
      className={`${styles[color]} ${selected_cell} ${traced_cell}`}
      onClick={() => onClick(h, v)}
    >
      {piece ? <Piece piece={piece} /> : ""}
    </div>
  );
};

export default Cell;
