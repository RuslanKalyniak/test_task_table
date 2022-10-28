
import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import LoaderFile from '../src/component/LoaderFile/LoaderFile'

const Home = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Engineer Case Study</title>
        <meta name="description" content="Frontend Engineer Case Study" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoaderFile />
    </div>
  )
}

export default Home
