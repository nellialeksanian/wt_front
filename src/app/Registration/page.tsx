"use client";

import React, {useState} from 'react';
import styles from './registration.module.scss'
import Link from 'next/link';
import Image from 'next/image'

function Registration() {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
      const [showSuccessModal, setShowSuccessModal] = useState(false);
  
    const handleShowPassword1 = () => {
      setShowPassword1(!showPassword1);
    };
  
    const handleShowPassword2 = () => {
      setShowPassword2(!showPassword2);
    };

    const handleRegistration = () => {
        // Здесь добавить логику регистрации
    
        setShowSuccessModal(true); 
      };
    
      const handleCloseModal = () => {
        setShowSuccessModal(false); 
      };
  
    return (
        <main className={styles.registration}>
           <div className={styles.wrapper}>
                <div className={styles.picture}>
                    <Image fill src="/assets/images/registration.svg" alt="reg" /> 
                </div>
                <div className={styles.wrapperleft}>
                    <div className={styles.enterspace}>
                            <div className={styles.block}>
                                <div className={styles.textlogo}>
                                    <div className={styles.title}>Создайте учетную запись</div>
                                    <div className={styles.description}>Введите данные</div>
                                    <button className={styles.googlebutton}></button>
                                </div>
                                <div className={styles.blocktext}>
                                    <input type="text" className={styles.login} placeholder='Nickname'/>
                                    <input type="text" className={styles.login} placeholder='Эл. адрес'/>
                                    <div className={styles.passwordContainer}> 
                                        <input
                                            type={showPassword1 ? "text" : "password"}
                                            className={styles.login}
                                            placeholder="Пароль"
                                        />
                                        <label onClick={handleShowPassword1}>
                                            <span className={styles.label}> 
                                                <Image
                                                src={showPassword1 ? "/assets/icons/eyeopen.svg" : "/assets/icons/close.svg"} alt="eye"
                                                layout="fill" 
                                                />
                                            </span>
                                        </label>
                                    </div>
                                    <div className={styles.passwordContainer}> 
                                        <input
                                            type={showPassword2 ? "text" : "password"}
                                            className={styles.login}
                                            placeholder="Повторите пароль"
                                        />
                                        <label onClick={handleShowPassword2}>
                                            <span className={styles.label}> 
                                                <Image
                                                src={showPassword2 ? "/assets/icons/eyeopen.svg" : "/assets/icons/close.svg"} alt="eye"
                                                layout="fill" 
                                                /> 
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        <button onClick={handleRegistration} className={styles.enterbutton}> Регистрация</button>
                    </div>
                    <div className={styles.botton}>
                        <div className={styles.agriment}>Регистрируясь, я соглашаюсь с условиями предоставления услуг и политикой конфиденциальности</div>
                        <div className={styles.textbotton}>
                            <div className={styles.text}>У вас есть учетная запись?</div>
                            <div className={styles.bluetext}>
                                <Link href="/Enter">Войти</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showSuccessModal && (
            <div className={styles.successModal}> 
                <div className={styles.modalContent}>
                    <p>Регистрация прошла успешно!</p>
                    <button onClick={handleCloseModal} className={styles.modalButton}>
                        <Link href = '/'>Ok</Link>
                    </button>
                </div>
            </div>
        )}
        </main>
    )
}

export default Registration;