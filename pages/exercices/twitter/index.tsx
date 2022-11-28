import styles from "./Twitter.module.css";

export default function Twitter() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.messages}></div>
      <div className={styles.post}></div>
    </div>
  );
}
