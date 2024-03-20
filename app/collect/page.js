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
          <button className={styles.button}>知る</button>
        </Link>
        <Link href="/collect/try">
          <button className={styles.button}>やってみる</button>
        </Link>
      </div>
    </div>
  );
};

export default CollectPage;
