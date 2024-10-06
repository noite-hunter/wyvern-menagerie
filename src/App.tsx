import './styles/global.css'
import styles from './styles/App.module.css'
import { Background } from './components/Background'
import { Card } from './components/Card'

import monstersJson from './assets/monster_names.json'

function App() {

  const monsters: (string | null)[][] = monstersJson
  const filteredMonsters: string[] = monsters.flat().filter((item): item is string => !!item)

  const findId = (name: string): number => monsters.findIndex((row) => row.includes(name))
  const findSubId = (name: string): number => monsters.find((row) => row.includes(name))?.indexOf(name) ?? -1
  
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Wyvern Menagerie</h1>
          <span className={styles.subtitle}>The monsters of Monster Hunter</span>
        </header>
        <div className={styles.cardSpread}>
          {filteredMonsters.map((monster, index) => (
            <Card key={index} monster={monster} monsterIndex={findId(monster)} variationIndex={findSubId(monster)}/>
          ))}
        </div>
        <footer><h2>{filteredMonsters.length + ' Large Monsters'}</h2></footer>
      </div>
      <Background />
    </>
  )
}

export default App
