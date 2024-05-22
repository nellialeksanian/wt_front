"use client";
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

function Header() {
  const [token, setToken] = useState(Cookies.get('token'));
  const router = useRouter();

  // Update token state whenever the cookies change
  useEffect(() => {
    const handleTokenChange = () => {
      setToken(Cookies.get('token'));
    };

    // Set up an interval to check for token changes
    const intervalId = setInterval(handleTokenChange, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const [isOpen, setOpen] = useState(false)
  const closeMenu = () => {
    setOpen(false);
  };

  const handleTryClick = async () => {
    const freshToken = Cookies.get('token');
    if (freshToken) {
      await router.push('/Constructor');
    } else {
      await router.push('/Enter');
    }
  };

  const handleAccountClick = async () =>{
    const freshToken = Cookies.get('token');
    if (freshToken) {
      await router.push('/Account');
    } else {
      await router.push('/Enter');
    }
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapper}`}>
        <Link href="/" className={styles.logo}>
          <Image fill src="/assets/icons/logo.svg" alt="logo" />
        </Link>
        <nav className={styles.nav}>
          <div className={styles.navList}>
              <div className={styles.navListItem}>
                <Link href="/#AboutUs">О нас</Link>
              </div>
              <div className={styles.navListItem}>
                <Link href="/#AIvoice">Голос ИИ</Link>
              </div>
          </div>
        </nav>
        <div className={styles.person} onClick={handleAccountClick}>
          <Image fill src="/assets/icons/person.svg" alt="person" />
        </div>
        <button className={styles.tryButton} onClick={handleTryClick}>
          Попробовать сейчаc
        </button>
        <button className={styles.menuIcon} onClick={() => setOpen(!isOpen)}>
          <Image  fill src="/assets/icons/menu.svg" alt="menu"/>
        </button>
      </div>
      <nav className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
         <div className={styles.menuList}>
            <div className={styles.menuListItem} onClick={closeMenu}>
              <Link href="/#AboutUs2">О нас</Link>
            </div>
            <div className={styles.menuListItem} onClick={closeMenu}>
              <Link href="/#AIvoice">Голос ИИ</Link>
            </div>
            <div className={styles.menuListItem} onClick={closeMenu}>
              <Link href="/Enter">Войти</Link>
            </div>
            <div className={styles.menuListItem} onClick={closeMenu}>
              <span onClick={handleAccountClick}>Личный кабинет</span>
            </div>
          </div>
          <button className={styles.tryButtonMenu} onClick={closeMenu}>
            <Link href = "/Constructor">Попробовать сейчас</Link>
          </button>
      </nav>
    </header>
  );
};
  
  export default Header;