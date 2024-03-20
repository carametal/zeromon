import styles from './index.module.css'
import Image from 'next/image';
import logo from '../public/logo.png'
import Link from 'next/link';

const Home = () => {
  return (
    <div className={styles.topScreen}>
      <h1 className={styles.titleText}>ZERO CABO MONSTER</h1>
      <Image src={logo} alt="Logo" className={styles.logo} />

      <div className={styles.buttonContainer}>
        <Link href="/merge/select-monster">
          <button className={styles.button}>生成する</button>
        </Link>
        <Link href="/collect">
          <button className={styles.button}>素材を集める</button>
        </Link>
        <Link href="/collection">
          <button className={styles.button}>コレクションを見る</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
