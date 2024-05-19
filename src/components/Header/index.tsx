"use client";
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import { useState } from 'react';

function Header() {
  const [isOpen, setOpen] = useState(false)
  const closeMenu = () => {
    setOpen(false);
  };
  
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
        {/* <Link href="/Account" className={styles.person}> */}
          <Image fill src="/assets/icons/person.svg" alt="person" />
        </Link>
        <button className={styles.tryButton}>
          <Link href = "/Constructor">Попробовать сейчас</Link>
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
              <Link href="/Account">Личный кабинет</Link>
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