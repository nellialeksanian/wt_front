import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <Link href="/" className={styles.logo}>
          <Image fill src="/assets/icons/logo.svg" alt="logo" />
        </Link>
        <nav className={styles.nav}>
          <div className={styles.navList}>
              <div className={styles.navListItem}>
                <Link href="#AboutUs">О нас</Link>
              </div>
              <div className={styles.navListItem}>
                <Link href="#AIvoice">Голос ИИ</Link>
              </div>
          </div>
        </nav>
        <Link href="/Enter" className={styles.person}>
          <Image fill src="/assets/icons/person.svg" alt="person" />
        </Link>
        <button className={styles.tryButton}>
          <Link href = "/Constructor">Попробовать сейчас</Link>
        </button>
     </div>
    </header>
  );
};
  
  export default Header;