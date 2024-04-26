"use client";
import styles from "./transactions.module.css";
import Image from "next/image";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>User</td>
            <td>Status</td>
            <td>Date</td>
            <td>Sum</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src="/noavatar.png"
                  alt="user avatar"
                  width={40}
                  height={40}
                />
                Edie Cant
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>12.04.2024</td>
            <td>720$</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src="/noavatar.png"
                  alt="user avatar"
                  width={40}
                  height={40}
                />
                Marge Simons
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>12.04.2024</td>
            <td>180$</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src="/noavatar.png"
                  alt="user avatar"
                  width={40}
                  height={40}
                />
                Daniel North
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>12.04.2024</td>
            <td>93$</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
