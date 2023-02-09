import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '../components/button'
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 3);
    }, 1000);
  });

  return (
    <>
      <Head>
        <title>Spotify App</title>
        <meta name="description" content="Generated by Marian Francisco" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/spotifyfavicon.png" />
      </Head>

      <main className={styles.main}>

      <div className={styles.logo}>
        <img src="spotifyfavicon.png" width="100px" height="100px"></img>
      </div>

      <div className={styles.info}>
        <p className={styles.subhead}>A decade wrapped! <br></br> Find out your Top Songs for 2019</p>
        <Button name='Get Started' link='/library'></Button>
      </div>

      <h1>Fun Fact: There are now {count} times!</h1>;

      </main>
    </>
  )
}
