import Link from 'next/link'

export default function Library() {
    return (
        <div>
            <h1>Song Library</h1>

            <p>Here are your top songs for 2019</p>

            <Link href="/">Back to Home</Link> 
        </div>
    )
}