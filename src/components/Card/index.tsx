import { useState, useEffect } from "react"
import styles from "./Card.module.css"

type CardProps = {
  monster: string,
  monsterId: string
}

export function Card({ monster, monsterId }: CardProps) {
  const [thumbnailUrl, setThumbnailUrl] = useState<string>('/src/assets/thumbs/thumb-fail.png')

  useEffect(() => {
    const loadThumbnail = async () => {
      try {
        const image = await import(`../../assets/thumbs/thumb-${monsterId}.png`)
        setThumbnailUrl(image.default)
      } catch (error) {
        console.error('Error loading thumbnail: ', error)
      }
    }
    loadThumbnail()
  }, [monsterId])

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
