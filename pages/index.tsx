import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className={styles.title}>Hello world!</h1>
    </div>
  );
};

export default Home;
