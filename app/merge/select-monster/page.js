'use client'
// pages/merge/select-monster/page.js

import React, { useState } from 'react';
import styles from './select-monster.module.css'; // CSSファイルのインポート
import monsters from '../../monsters'; // モンスターリストのインポート
import Link from 'next/link';

const SelectorMonster = () => {
  // 選択されたモンスターの情報を管理する状態
  const [selectedMonster, setSelectedMonster] = useState(null);

  // モンスターが選択されたときの処理
  const handleMonsterSelect = (monster) => {
    setSelectedMonster(monster);
  };


  return (
    <div className={styles.container}>
      <h1>モンスターを選択してください</h1>
      {/* 選択されたモンスターがあれば表示 */}
      {selectedMonster && (
        <div className={styles.selectedMonster}>
          <h2>{selectedMonster.name}</h2>
          <img src={selectedMonster.src} alt={selectedMonster.name} className={styles.selectedMonsterImage} />
          <p>{selectedMonster.feature}</p>
          <div className={styles.monsterStats}>
            <h3 className={styles.status}>ステータス</h3>
            <p>{selectedMonster.status.hp.jp}: {selectedMonster.status.hp.value}</p>
            <p>{selectedMonster.status.att.jp}: {selectedMonster.status.att.value}</p>
            <p>{selectedMonster.status.def.jp}: {selectedMonster.status.def.value}</p>
            <p>{selectedMonster.status.special.jp}: {selectedMonster.status.special.value}</p>
          </div>
          <Link href={{
            pathname: '/merge/select-word',
            query: {monsterId: selectedMonster.id}
          }}>
            <button className={styles.baseMonsterButton}>このモンスターをベースにする</button>
          </Link>
        </div>
      )}
      <div className={styles.monsterList}>
        {monsters.map((monster) => (
          <div key={monster.id} className={styles.monsterItem} onClick={() => handleMonsterSelect(monster)}>
            <img src={monster.src} alt={monster.name} className={styles.monsterImage} />
            <p className={styles.monsterName}>{monster.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectorMonster;
