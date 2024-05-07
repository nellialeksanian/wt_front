import styles from "./Footer.module.scss";

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerChild} />
        <h2 className={styles.h2}>Чтец</h2>
        <div className={styles.footerInner}>
          <div className={styles.frameParent}>
            <div className={styles.parent}>
              <div className={styles.div}>Почта</div>
              <div className={styles.div1}>Номер</div>
              <div className={styles.div2}>ВКонтакте</div>
              <div className={styles.div3}>Телеграм</div>
              <div className={styles.div4}>Ютюб</div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.group}>
                <div className={styles.div5}>О нас</div>
                <div className={styles.div6}>Голос ИИ</div>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.div7}>Все права защищены</div>
            </div>
          </div>
        </div>
      </footer>
    );
  };