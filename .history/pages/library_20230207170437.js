import Link from 'next/link'
import record from '../data/songs.json'

export default function Library() {
    console.log(record)

    return (
        <div>
            <h1>Song Library</h1>
            <p>Here are your top songs for 2019</p>

            <div className={styles.songlist}>
                {
                    songs.map((rec, index) => {
                        return (
                            <div key={index}>
                                <div>{rec.Track.Name}</div>
                            </div>
                        )
                    })
                }
            </div>

            <Link href="/">Back to Home</Link> 

        </div>
    )
}