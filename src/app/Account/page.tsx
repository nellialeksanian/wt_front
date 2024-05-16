
import Image from 'next/image';
import Link from 'next/link';
import styles from './Account.module.scss';

function Account() {

    return (
        <main className={styles.account}>
            <div className={styles.container}>
                <span className={styles.text1}>Профиль</span>
                <div className={styles.containerMedium}>
                    <div className={styles.containerSmall}>
                        <span className={styles.text2}>Имя Пользователя</span>
                        <span id = 'username'className={styles.text3}>@username</span>
                    </div>
                    <div className={styles.containerSmall}>
                        <span className={styles.text2}>Эл. почта</span>
                        <span id = 'email' className={styles.text3}>Username@gmail.com</span>
                    </div>
                    <div className={styles.containerSmall}>
                        <span className={styles.text2}>Дата регистрации</span>
                        <span id = 'date' className={styles.text3}>00.00.0000</span>
                    </div>
                </div>
                <button className={styles.saveButton}>
                    <Link href = '/Settings'>Настройки аккаунта</Link>
                </button>
                <div className={styles.exit}>
                    <Link href="/">Выход</Link>
                </div>
            </div>
            <div className={styles.image}>
                <Image fill src="/assets/images/account_img.svg" alt="mic" /> 
            </div> 
        </main>

    );
};  
export default Account;
