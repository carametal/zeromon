import React from 'react';
import styles from './Collection.module.css'; // CSSモジュールのインポート
//いったんはテストデータ
//import collectionItems from '../data/collectionItems'; // データのインポートパスは適宜調整

const CollectionPage = () => {
  
  // テストデータの定義、データがめっちゃ多いとタイトルが上にずれます（要修正）
  const collectionItems = [
    {
      id: 1,
      name: 'モンスター１',
      imageUrl: 'https://via.placeholder.com/150', // プレースホルダー画像URL
    },
    {
      id: 2,
      name: 'モンスター２',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'モンスター3',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'モンスター3',
      imageUrl: 'https://via.placeholder.com/150',
    }
  ];

  return (
    <div className={styles.container}>
      <h1 >コレクション一覧</h1>
      <div className={styles.content}>
        {collectionItems.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.imageUrl} alt={item.name} className={styles.image} />
            <h2 className={styles.name}>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
