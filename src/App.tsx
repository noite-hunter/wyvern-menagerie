import { Background } from './components/Background'
import './styles/global.css'
import styles from './styles/App.module.css'

function App() {


  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Wyvern Menagerie</h1>
        <span className={styles.subtitle}>The monsters of Monster Hunter</span>
      </div>
      <Background />
    </>
  )
}

export default App
