import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {


  const testApi = async () => {
    const data123 = {data:"Hello vedha"}
    const response = await fetch('http://localhost:3000/api/getSensorData', {
      method:'POST',
      body: JSON.stringify(data123),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const result = await response.json();
    // console.log(result);
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Medical Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       hi
      </main>
      <button onClick={testApi}>Test API</button>
      <footer className={styles.footer}></footer>
    </div>
  )
}
