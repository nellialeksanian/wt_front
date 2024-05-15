"use client";
import React, {useState} from 'react';
import styles from './enter.module.scss'
import Link from 'next/link';
import Image from 'next/image'

function Enter() {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
    return (
        <main className={styles.enter}>
           <div className={styles.wrapper}>
                <div className={styles.picture}>
                    <Image fill src="/assets/images/registration.svg" alt="reg" /> 
                </div>
                <div className={styles.wrapperleft}>
                    <div className={styles.enterspace}>
                        <div className={styles.blocktext}>
                            <div className={styles.textlogo}>
                                <div className={styles.title}>Войдите в систему</div>
                                <div className={styles.description}>Введите данные</div>
                                <button className={styles.googlebutton}></button>
                            </div>
                                <input type="text" className={styles.login} placeholder='Эл. адрес'/>
                                <div className={styles.passwordContainer}> 
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className={styles.login}
                                            placeholder="Пароль"
                                        />
                                        <label onClick={handleShowPassword}>
                                            <span className={styles.label}> 
                                                <Image
                                                src={showPassword ? "/assets/icons/eyeopen.svg" : "/assets/icons/close.svg"} alt="eye"
                                                layout="fill" 
                                                />
                                            </span>
                                        </label>
                                    </div>
                            <div className={styles.bluetext}>
                                <Link href="#">Забыли пароль?</Link>
                            </div>
                        </div>
                        <button className={styles.enterbutton}>
                            <Link href = '/Constructor'>Вход</Link>
                        </button>
                    </div>
                    <div className={styles.textbotton}>
                        <div className={styles.text}>У вас есть учетная запись?</div>
                        <div className={styles.bluetext}>
                            <Link href="/Registration">Зарегестрироваться</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Enter;