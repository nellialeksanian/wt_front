// "use client";
import React, {useState} from 'react';
import styles from './comments.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Cookies from 'js-cookie';
//marckup выводить
function Comments() {
    return (
        <main className={styles.comments}>
            <div className={styles.post}>
                <audio controls className={styles.customAudio}>
                    <source src='/assets/audio/audio_1.mp3'></source>
                </audio>
                <div className={styles.text}>
                    <div className={styles.title}>Размеченный текст</div>
                    <div className={styles.marckup}>Привет, это голос номер ноль. Я рад приветствовать вас.</div>
                </div>
            </div>
            <div className={styles.wrapperright}>
                <Link href="/" className={styles.exit}>
                    <Image fill src="assets/icons/exit.svg" alt="exit" />
                </Link>
                <div className={styles.wrapperbotton}>
                    <div className={styles.commentbody}>
                        <div className={styles.user}>
                            <Image fill src="assets/icons/user.svg" alt="user" />
                            </div>
                        <div className={styles.comment}>
                            <div className={styles.username}>user12589945043677</div>
                            <div className={styles.commenttext}>Классная программа мне все понравилось</div>
                        </div>
                    </div>
                    <div className={styles.postcomment}>
                        <input type="text" className={styles.inpitspace}/>
                        <button className={styles.buttonpost}>Отправить</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Comments;