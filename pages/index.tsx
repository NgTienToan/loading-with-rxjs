import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import VanMau from './vanmau'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dit me wibu</title>
        <meta name="description" content="Đây là page chửi dit me wjbu" />
        <link rel="icon" href="/thumb.jpg" />
      </Head>
      <VanMau />
    </div>
  )
}

export default Home
