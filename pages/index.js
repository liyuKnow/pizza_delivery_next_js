import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Delivery</title>
        <meta name="description" content="Fastest and best pizza delivery in Addis Ababa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
