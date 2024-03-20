'use client'
// pages/combine/select-monster/page.js

import React, { useState } from 'react';
import styles from './select-monster.module.css'; // CSSファイルのインポート
import monsters from '../../monsters'; // モンスターリストのインポート

const SelectorMonster = () => {
  // モンスターリスト
  const monsterList = [
    { id: 1, name: 'カーリングカボモン', imageSrc: '/monsters/carling.png', description: 'モンスター1の説明', stats: { hp: 100, defense: 50, attack: 80, deliciousness: 70 } },
    { id: 2, name: 'ヤキニクカボモン', imageSrc: '/monsters/yakiniku.png', description: 'モンスター2の説明', stats: { hp: 120, defense: 60, attack: 90, deliciousness: 80 } },
    { id: 3, name: 'タマネギカボモン', imageSrc: '/monsters/tamanegi.png', description: 'モンスター3の説明', stats: { hp: 150, defense: 70, attack: 100, deliciousness: 90 } },
    // 他のモンスターを追加
  ];

  // 選択されたモンスターの情報を管理する状態
  const [selectedMonster, setSelectedMonster] = useState(null);

  // モンスターが選択されたときの処理
  const handleMonsterSelect = (monster) => {
    setSelectedMonster(monster);
  };

  // ベースにするモンスターを設定する関数
  const setBaseMonster = () => {
    // ここにモンスターをベースにする処理を実装
    console.log('モンスターをベースにしました:', selectedMonster);
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
            <h3>ステータス</h3>
            <p>{selectedMonster.status.hp.jp}: {selectedMonster.status.hp.value}</p>
            <p>{selectedMonster.status.att.jp}: {selectedMonster.status.att.value}</p>
            <p>{selectedMonster.status.def.jp}: {selectedMonster.status.def.value}</p>
            <p>{selectedMonster.status.special.jp}: {selectedMonster.status.special.value}</p>
          </div>
          <button className={styles.baseMonsterButton} onClick={setBaseMonster}>このモンスターベースにする</button>
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
