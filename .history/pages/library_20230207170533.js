import Link from 'next/link'
import songs from '../data/top20songs.json'

export default function Library() {
    console.log(songs)

    return (
        <div>
            <h1>Song Library</h1>
            <p>Here are your top songs for 2019</p>

            <div>
                {
                    songs.map((song, index) => {
                        return (
                            <div key={index}>
                                <div>{song.TrackName}</div>
                            </div>
                        )
                    })
                }
            </div>

            <Link href="/">Back to Home</Link> 

        </div>
    )
}