"use client";

import Image from 'next/image';
import Link from 'next/link';
import styles from './Account.module.scss';
import { useState } from 'react';

function Account() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <main className={styles.account}>
            <div className={styles.container}>
                <span className={styles.text1}>Настройки аккаунта</span>
                <div className={styles.tabBlock}>
                    <div className={toggleState === 1 ? styles.activeTab : styles.tab} 
                    onClick={() => toggleTab(1)}>Общее</div>
                    <div className={toggleState === 2 ? styles.activeTab : styles.tab} 
                    onClick={() => toggleTab(2)}> Сменить пароль</div>
                </div>
                <hr className={styles.solid}></hr>
                <div className={styles.tabContent}>
                    <div className={toggleState === 1 ? styles.activeContent : styles.content}>
                        <textarea className={styles.input} id="email">Эл. адрес</textarea>
                        <textarea className={styles.input} id="username">Имя пользователя</textarea>
                        <button className={styles.saveButton}>
                            <Link href = '/'>Сохранить изменения</Link>
                        </button>
                        <div className={styles.exit}>
                            <Link href="/">Выход</Link>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? styles.activeContent : styles.content}>
                        <textarea className={styles.input} id="old_pass">Старый пароль</textarea>
                        <textarea className={styles.input} id="new_pass">Новый пароль</textarea>
                        <button className={styles.saveButton}>
                            <Link href = '/'>Сохранить изменения</Link>
                        </button>
                        <div className={styles.exit}>
                            <Link href="/">Выход</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.image}>
                <Image fill src="/assets/images/account_img.svg" alt="mic" /> 
            </div> 
        </main>

    );
};  
export default Account;
