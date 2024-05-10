import styles from "./Footer.module.scss";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}> 
        <span className={styles.textbig}>Чтец</span>
        <div className={styles.group}>
          <div className={styles.text}>Почта</div>
          <div className={styles.text}>Номер</div>
          <div className={styles.text}>ВКонтакте</div>
          <div className={styles.text}>Телеграм</div>
          <div className={styles.text}>Ютюб</div>
        </div>
        <div className={styles.group}>
          <div className={styles.text}>
            <Link href="#">О нас</Link>
          </div>
          <div className={styles.text}>
            <Link href="#">Голос ИИ</Link>
          </div>
        </div>
        <div className={styles.text}>Все права защищены</div>
      </div>
    </footer>
  );
};