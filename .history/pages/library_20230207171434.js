import Link from 'next/link'
import songs from '../data/top20songs.json'
import styles from '../styles/Library.module.css'

export default function Library() {
    console.log(songs)

    return (
        <div>
            <h1>Song Library</h1>
            <p>Here are your top songs for 2019</p>

            <main>
                {
                    songs.map((song, index) => {
                        return (
                            <div key={index}>
                                <div>{song.Number}</div>
                                <div>{song.TrackName}</div>
                                <div>{song.ArtistName}</div>
                                <div>{song.Genre}</div>
                            </div>
                        )
                    })
                }
            </main>

            <Link href="/">Back to Home</Link> 

        </div>
    )
}