import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Samsarah</title>
        <meta name="description" content="Samsarah is financial social network" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Samsarah
        </h1>

        <p className={styles.description}>
          The financial social netowrk.
        </p>
      </main>

      <footer className={styles.footer}>

          <div> Built by Eagle </div>
      </footer>
    </div>
  )
}
