'use client'

import React from 'react';
import Link from 'next/link';
import styles from './Collect.module.css';

const CollectPage = () => {
  return (
    <div className={styles.container}>
      <h1>どちらをお選びですか？</h1>
      <div className={styles.buttons}>
        <Link href="/collect/know">
          <button className={styles.button}>ゼロカーボンについて知る（ワードゲット）</button>
        </Link>
        <Link href="/collect/try">
          <button className={styles.button}>自分にやれることをやってみる（モンスターゲット）</button>
        </Link>
      </div>
    </div>
  );
};

export default CollectPage;
