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
  if (piece.type === "k" && piece.color === "white") image = kw;
  if (piece.type === "q" && piece.color === "white") image = qw;
  if (piece.type === "r" && piece.color === "white") image = rw;
  if (piece.type === "b" && piece.color === "white") image = bw;
  if (piece.type === "n" && piece.color === "white") image = nw;
  if (piece.type === "p" && piece.color === "white") image = pw;
  if (piece.type === "k" && piece.color === "black") image = kb;
  if (piece.type === "q" && piece.color === "black") image = qb;
  if (piece.type === "r" && piece.color === "black") image = rb;
  if (piece.type === "b" && piece.color === "black") image = bb;
  if (piece.type === "n" && piece.color === "black") image = nb;
  if (piece.type === "p" && piece.color === "black") image = pb;
  return <img src={image} className={styles.piece} />;
};

export default Piece;
