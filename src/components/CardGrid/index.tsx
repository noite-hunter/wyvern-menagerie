import styles from './CardGrid.module.css'

import { Card } from '../Card'
import { useEffect, useRef } from 'react'

type CardGridProps = {
  array2D: ( string | null )[][],
  findId: (arg0: string) => string,
  findSubId: (arg0: string) => string
}

export function CardGrid({ array2D, findId, findSubId }: CardGridProps) {
  const gridRef = useRef<HTMLDivElement | null>(null)

  function scaleGrid() {
    if (gridRef.current) {
      const windowWidth: number = window.innerWidth
      const cols: number = array2D[0].length

      const cardWidth: number = 160 // If the width of the Card component ever changes, edit this

      const scale: number = windowWidth/(cols * cardWidth)

      gridRef.current.style.transform = `scale(${scale})`
    }
  }

  useEffect(() => {
    scaleGrid()
    window.addEventListener('resize', scaleGrid)

    return () => window.removeEventListener('resize', scaleGrid)
  })

  return (
    <div className={styles.cardGrid} ref={gridRef}>
      {array2D.map((row, rowIndex) =>
        row.map((monster, subIndex) => {
          if (!monster) {
            return <div key={`${rowIndex + 1}_${subIndex}`}></div>
          }

          const monsterId = findId(monster) + '_' + findSubId(monster)

          return (
            <Card
              key={monsterId}
              monster={monster}
              monsterId={monsterId}
            />
          )
        })
      )}
    </div>
  )
}