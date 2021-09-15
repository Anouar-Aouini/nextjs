import Link from 'next/link'
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}


const Hello = ({posts}) => {
    return (
        <>
        <h1>Hello</h1>
                <ul>
                {posts.map((post) => (
        <li key={post.id}><Link href={`/posts/${post.id}`}>{post.name}</Link></li>
      ))}
            </ul>
            <button><Link href="/">Back home</Link></button>
        </>
     );
}

export default Hello;