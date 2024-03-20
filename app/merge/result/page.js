'use client'

import React, { useState, useEffect } from 'react';
import styles from './merge-result.module.css'; // CSS ファイルのインポート
import mergedMonsters from '../../mergeMonsters'; // モンスターのインポート
import Link from 'next/link';

const MergeResult = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [generatedMonster, setGeneratedMonster] = useState(null);

  useEffect(() => {
    // 3秒後にローディングを解除してモンスターを生成
    const timer = setTimeout(() => {
      setIsLoading(false);
      // URLからクエリパラメータを取得
      const urlParams = new URLSearchParams(window.location.search);
      const monsterId = urlParams.get('monsterId');
      // クエリパラメータで指定されたモンスターを取得
      const monster = mergedMonsters.find(monster => monster.id === +monsterId);
      setGeneratedMonster(monster);
    }, 3000);

    // コンポーネントがアンマウントされたときにタイマーをクリア
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div>
          <h2 className={styles.loadingText}>モンスター生成中...</h2>
          <div className={styles.loader}></div>
        </div>
      ) : (
        <div>
          <h2 className={styles.title}>モンスターが生成されました!!</h2>
          <div className={styles.monsterContainer}>
            {/* 生成されたモンスターの表示 */}
            {generatedMonster && (
              <div className={styles.monster}>
                <h2>{generatedMonster.name}</h2>
                <img src={generatedMonster.src} alt={generatedMonster.name} className={styles.monsterImage} />
                <p>{generatedMonster.feature}</p>
                <div className={styles.monsterStats}>
                  <h3>ステータス</h3>
                  <p>{generatedMonster.status.hp.jp}: {generatedMonster.status.hp.value}</p>
                  <p>{generatedMonster.status.att.jp}: {generatedMonster.status.att.value}</p>
                  <p>{generatedMonster.status.def.jp}: {generatedMonster.status.def.value}</p>
                  <p>{generatedMonster.status.special.jp}: {generatedMonster.status.special.value}</p>
                </div>
              </div>
            )}
          </div>
          <div className={styles.backToTopButton}>
            <Link href="/"> トップに戻る </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MergeResult;
