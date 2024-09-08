import Head from 'next/head';
import Carousel from '../components/Carousel';
import styles from './Home.module.css'; 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carousel</title>
        <meta name="description" content="Bir Carousel bileşeni oluşturma projesi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Project 1 : Carousel</h1>
        <Carousel />
      </main>
    </div>
  );
}
