import styles from './page.module.css'
import ConnectWalletBtn from './(components)/ConnectWalletBtn'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Hello World
        </p>
        <div>
          <ConnectWalletBtn />
        </div>
      </div>
    </main>
  )
}