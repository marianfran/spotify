import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotify App</title>
        <meta name="description" content="Generated by Marian Francisco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/spotifyfavicon.png" />
      </Head>

      <main className={styles.main}>
      <div>
        <button onClick='/library'>Get Started</button>
      </div>
      </main>
    </>
  )
}
