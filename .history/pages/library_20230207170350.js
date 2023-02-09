import Link from 'next/link'
import songs from '../data/songs.json'

export default function Library() {
    console.log(songs)

    return (
        <div>
            <h1>Song Library</h1>
            <p>Here are your top songs for 2019</p>

            <div className={styles.songlist}>
                {
                    songs.map((song, index) => {
                        return (
                            <div key={index}>
                                <div>{song.Track.Name}</div>
                            </div>
                        )
                    })
                }
            </div>

            <Link href="/">Back to Home</Link> 

        </div>
    )
}