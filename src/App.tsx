import './styles/global.css'
import styles from './styles/App.module.css'
import toggleStyles from './styles/Toggle.module.css'

import { createRef, useState } from 'react'

import { Background } from './components/Background'
import { Card } from './components/Card'

import monstersJson from './assets/monster_names.json'
import { CardSpread } from './components/CardSpread'
import { CardGrid } from './components/CardGrid'

function App() {

  const monsters: (string | null)[][] = monstersJson
  const trimmedMonsters: (string | null)[][] = monsters.map((row) => row.slice(0, -1)).filter((row) => !!row[0])
  const filteredMonsters: string[] = monsters.flat().filter((item): item is string => !!item)

  const findId = (name: string): string => 
    (monsters.findIndex((row) => row.includes(name)) + 1)
      .toString()
      .padStart(3, '0')
  const findSubId = (name: string): string =>
    (monsters.find((row) => row.includes(name))?.indexOf(name) ?? -1)
      .toString()
      .padStart(2, '0')

  const [mode, setMode] = useState<boolean>(false)

  createRef()

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <label className={toggleStyles.toggle}>
            <input
              type="checkbox"
              className={toggleStyles.checkbox}
              checked={mode}
              onChange={(e) => setMode(e.target.checked)}
            />
            <span className={toggleStyles.slider}></span>
          </label>
          <h1 className={styles.title}>Wyvern Menagerie</h1>
          <h2 className={styles.subtitle}>The monsters of Monster Hunter</h2>
        </header>
        {!mode ?
          <CardSpread
            array={filteredMonsters}
            findId={findId}
            findSubId={findSubId}
          />
          :
          <CardGrid
            array2D={trimmedMonsters}
            findId={findId}
            findSubId={findSubId}
          />
        }
        <footer><h2>{filteredMonsters.length + ' Large Monsters'}</h2></footer>
      </div>
      <Background />
    </>
  )
}

export default App
