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
      const gridWidth: number = gridRef.current.offsetWidth + 40

      let scale: number = 1

      if (gridWidth > windowWidth) {
        scale = windowWidth/gridWidth
      }

      gridRef.current.style.transform = `scale(${scale})`
    }
  }

  useEffect(() => {
    scaleGrid()
    window.addEventListener('resize', scaleGrid)

    return () => window.removeEventListener('resize', scaleGrid)
  })

  return (
    <>
      <div className={styles.headerRow}>
        <div className={styles.colHeader}><h2>Base</h2></div>
        <div className={styles.colHeader}><h2>Subspecies</h2></div>
        <div className={styles.colHeader}><h2>Rare Species</h2></div>
        <div className={styles.colHeader}><h2>Deviant</h2></div>
        <div className={styles.colHeader}><h2>Variant</h2></div>
        <div className={styles.colHeader}><h2>Rise Apex</h2></div>
        <div className={styles.colHeader}><h2>Risen</h2></div>
      </div>
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
    </>
  )
}