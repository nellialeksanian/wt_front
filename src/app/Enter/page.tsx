"use client";
import React, {useState} from 'react';
import styles from './enter.module.scss'
import Link from 'next/link';
import Image from 'next/image'

function Enter() {
    const [showPassword, setShowPassword] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
    
    const handleLogin = async () => {
    try {
        const formData = {
        username: username,
        email: email,
        password: password,
        };
    
        const response = await fetch('http://127.0.0.1:7777/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(formData)
        });
    
        if (!response.ok) {
        throw new Error('Registration failed');
        }
        
        const responseData = await response.json();
        console.log('Login successfully:', responseData);   //переход на страницу
        setShowSuccessModal(true);
    } catch (error) {
        console.error('Login error:', error);
    }
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
                                <input type="text" className={styles.login} placeholder='Nickname' value={username} onChange={(e) => setUsername(e.target.value)}/>
                                <input type="text" className={styles.login} placeholder='Эл. адрес' value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>
                                <div className={styles.passwordContainer}> 
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className={styles.login}
                                            placeholder="Пароль"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
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
                        <button onClick={handleLogin} className={styles.enterbutton}> Вход</button>
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
