import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import VanMau from './vanmau'

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      <Head>
        <title>Dit me wibu</title>
        <meta name="description" content="Văn mẫu chửi wibu" />
        <link rel="icon" href="/thumb.jpg" />
      </Head>
      <VanMau />
    </div>
  )
}

export default Home
