import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png'
import styles from './TopScreen.module.css';

const TopScreen = () => {
  return (
    <div className={styles.topScreen}>
      <Image src={logo} alt="Logo" className={styles.logo} />

      <div className={styles.buttonContainer}>
        <button className={styles.button}>合成する</button>
        <button className={styles.button}>素材を集める</button>
        <button className={styles.button}>コレクションを見る</button>
      </div>
    </div>
  );
};

export default TopScreen;
