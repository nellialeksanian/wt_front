"use client";
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import { useState } from 'react';

function Header() {
  const [isOpen, setOpen] = useState(false)
  
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
        <Link href="/Account" className={styles.person}>
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
            <div className={styles.menuListItem}>
              <Link href="#AboutUs2">О нас</Link>
            </div>
            <div className={styles.menuListItem}>
              <Link href="#AIvoice">Голос ИИ</Link>
            </div>
            <div className={styles.menuListItem}>
              <Link href="/">Войти</Link>
            </div>
            <div className={styles.menuListItem}>
              <Link href="/">Настройки аккаунта</Link>
            </div>
          </div>
          <button className={styles.tryButtonMenu}>
            <Link href = "/Constructor">Попробовать сейчас</Link>
          </button>
      </nav>
    </header>
  );
};
  
  export default Header;