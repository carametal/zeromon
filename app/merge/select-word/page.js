'use client'

// pages/merge/select-word/page.js

import React, { useState, useEffect } from 'react';
import styles from './select-word.module.css'; // CSSファイルのインポート
import monsters from '../../monsters'; // モンスターのインポート
import words from '../../words';
import Link from 'next/link';

const SelectorWord = () => {
  // モンスターリストからクエリパラメータで指定されたモンスターを取得する
  const [selectedMonster, setSelectedMonster] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // URLからクエリパラメータを取得
    const urlParams = new URLSearchParams(window.location.search);
    const monsterId = urlParams.get('monsterId');
    // クエリパラメータで指定されたモンスターを取得
    const monster = monsters.find(monster => monster.id.toString() === monsterId);
    setSelectedMonster(monster);
  }, []);

  // ワードが選択されたときの処理
  const handleWordSelect = (word) => {
    setSelectedWord(word);
    setShowModal(true);
  };

  // モーダルを閉じる
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // ワードリスト
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ワードを選択してください</h1>
      {selectedMonster && (
        <div className={styles.selectedMonster}>
          <h2 className={styles.name}>{selectedMonster.name}</h2>
          <img src={selectedMonster.src} alt={selectedMonster.name} className={styles.selectedMonsterImage} />
          <p>{selectedMonster.feature}</p>
          <div className={styles.monsterStats}>
            <p><b>ステータス</b></p>
            <p><span>{selectedMonster.status.hp.jp}</span>: {selectedMonster.status.hp.value}</p>
            <p><span>{selectedMonster.status.att.jp}</span>: {selectedMonster.status.att.value}</p>
            <p><span>{selectedMonster.status.def.jp}</span>: {selectedMonster.status.def.value}</p>
            <p><span>{selectedMonster.status.special.jp}</span>: {selectedMonster.status.special.value}</p>
          </div>
        </div>
      )}
      <div className={styles.wordList}>
        {words.map((word) => (
          <div key={word.id} className={styles.wordItem} onClick={() => handleWordSelect(word)}>
            <p className={styles.wordName}>{word.content}</p>
          </div>
        ))}
      </div>
      {showModal && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <h2>{selectedMonster.name} ✖️ {selectedWord.content} で生成しますか？</h2>
            <img src={selectedMonster.src} alt={selectedMonster.name} className={styles.modalMonsterImage} />
            <div className={styles.modalButtonContainer}>
              <Link href={{
                pathname: "/merge/result",
                query: { monsterId: selectedMonster.id + 3}
              }}>
                <button className={`${styles.modalButton} ${styles.yesButton}`} onClick={handleCloseModal}>生成する</button>
              </Link>
              <button className={`${styles.modalButton} ${styles.noButton}`} onClick={handleCloseModal}>他のワードを選ぶ</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectorWord;
