import styles from "./Card.module.css";

type CardProps = {
  monster: string,
  monsterIndex: number,
  variationIndex: number
}

export function Card({ monster, monsterIndex, variationIndex }: CardProps) {
  const thumbnailUrl: string = '/src/assets/thumbs/thumb-' +
    (monsterIndex + 1).toString().padStart(3, '0') +
    '_' +
    variationIndex.toString().padStart(2, '0') +
    '.png';  

  return (
    <div className={styles.monsterCard}>
      <div className={styles.thumbnailBackground}>
        <div className={styles.thumbnailEffect} style={{backgroundImage: `url(${thumbnailUrl})`}}></div>
        <div className={styles.thumbnailContainer} style={{backgroundImage: `url(${thumbnailUrl})`}}></div>
      </div>
      <div className={styles.nameContainer}>
        <span className={styles.monsterName}>{monster}</span>
      </div>
    </div>
  );
}
