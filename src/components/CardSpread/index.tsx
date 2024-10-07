import styles from './CardSpread.module.css'

import { Card } from '../Card'

type CardSpreadProps = {
  array: string[],
  findId: (arg0: string) => string,
  findSubId: (arg0: string) => string
}

export function CardSpread({ array, findId, findSubId }: CardSpreadProps) {

  return (
    <div className={styles.cardSpread}>
      {array.map((monster) => {
        const monsterId = findId(monster) + '_' + findSubId(monster)

        return(
          <Card
            key={monsterId}
            monster={monster}
            monsterId={monsterId}
          />
        )
      })}
    </div>
  )
}