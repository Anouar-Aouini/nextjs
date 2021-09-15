import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      
      <h1>Hello World</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
      <button><Link href="/posts">Posts</Link></button>
    </div>
  )
}
