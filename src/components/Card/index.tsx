import styles from "./Card.module.css";

export function Card({ monster }: { monster: string | null }) {
  return (
    <div className={styles.monsterCard}>
      <div className={styles.thumbnailBackground}>
        <div className={styles.thumbnailEffect}></div>
        <div className={styles.thumbnailContainer}></div>
      </div>
      <div className={styles.nameContainer}>
        <span className={styles.monsterName}>{monster}</span>
      </div>
    </div>
  );
}
