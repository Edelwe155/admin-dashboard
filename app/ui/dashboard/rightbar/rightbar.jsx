import styles from "./rightbar.module.css";
import { BsInfoCircle } from "react-icons/bs";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerItem}>
        <BsInfoCircle size={30} />
        <h2>Updates Feed</h2>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <h3 className={styles.title}>New Admin Workflow</h3>
          <span className={styles.subtitle}>
            Interface update and new functionality summary.
          </span>
          <p className={styles.desc}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn not anything embarrassing hidden in the
            middle of text.
          </p>
          <button className={styles.button}>To Update</button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <h3 className={styles.title}>New Admin Workflow</h3>
          <span className={styles.subtitle}>
            Interface update and new functionality summary.
          </span>
          <p className={styles.desc}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn not anything embarrassing hidden in the
            middle of text.
          </p>
          <button className={styles.button}>To Update</button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
