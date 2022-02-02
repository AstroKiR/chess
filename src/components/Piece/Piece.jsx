import kw from "./images/kw.svg";
import qw from "./images/qw.svg";
import rw from "./images/rw.svg";
import bw from "./images/bw.svg";
import nw from "./images/nw.svg";
import pw from "./images/pw.svg";

import kb from "./images/kb.svg";
import qb from "./images/qb.svg";
import rb from "./images/rb.svg";
import bb from "./images/bb.svg";
import nb from "./images/nb.svg";
import pb from "./images/pb.svg";

import styles from "./Piece.module.css";

const Piece = ({ piece }) => {
  let image = null;
  if (piece.type === "k" && piece.color === "w") image = kw;
  if (piece.type === "q" && piece.color === "w") image = qw;
  if (piece.type === "r" && piece.color === "w") image = rw;
  if (piece.type === "b" && piece.color === "w") image = bw;
  if (piece.type === "n" && piece.color === "w") image = nw;
  if (piece.type === "p" && piece.color === "w") image = pw;
  if (piece.type === "k" && piece.color === "b") image = kb;
  if (piece.type === "q" && piece.color === "b") image = qb;
  if (piece.type === "r" && piece.color === "b") image = rb;
  if (piece.type === "b" && piece.color === "b") image = bb;
  if (piece.type === "n" && piece.color === "b") image = nb;
  if (piece.type === "p" && piece.color === "b") image = pb;
  return <img src={image} className={styles.piece} />;
};

export default Piece;
