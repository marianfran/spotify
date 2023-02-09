import Link from 'next/link'
import songs from '../data/top20songs.json'
import styles from '../styles/Library.module.css'
import MusicLoader from '@/components/musicloader'
import { useEffect, useState } from 'react'

export default function Library() {

    console.log(songs)

    // Create 5 seconds UseEffect using setTimeout
    // const [count, setCount] = useState(0); 
    const [loading, setLoading] = useState(true);

   useEffect(() => {
        setLoading(false)
    }, [])



    return (
        <div className={styles.container}>

            <div className={styles.header}>
            <h1>Song Library</h1>
            <p>Here are your top songs for 2019</p>
            </div>
            <MusicLoader></MusicLoader>
            
            <Link href="/">Back to Home</Link> 

            <br></br>

            <main className={styles.songlist}>
                {
                    songs.map((song, index) => {
                        return (
                            <div key={index}>
                                <div className={styles.songnumber}>{song.Number}</div>
                                <div className={styles.trackname}>{song.TrackName}</div>
                                <div className={styles.artistname}>{song.ArtistName}</div>
                            </div>
                        )
                    })
                }
            </main>

        </div>
    )
}

