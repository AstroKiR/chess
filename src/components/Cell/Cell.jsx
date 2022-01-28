import styles from "./Cell.module.css";

const Cell = ({ selected, type, piece, color, x, y, onClick }) => {
  const selected_cell = selected ? styles.selected : null;
  return (
    <div
      className={`${styles[color]} ${selected_cell}`}
      onClick={() => onClick(x, y)}
      key={`${x}${y}`}
    >
      {piece ? piece.type : ""}
    </div>
  );
};

export default Cell;
