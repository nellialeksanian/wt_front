"use client";
import Image from 'next/image';
import Link from 'next/link';
import styles from './Settings.module.scss';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
    
function Settings() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleUpdateAccount = async () => {
        const id = Cookies.get('userId');

        const requestBody: { email?: string; username?: string } = {};
        if (email) requestBody.email = email;
        if (username) requestBody.username = username;

        try {
            const response = await fetch(`http://127.0.0.1:7777/api/user/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('token')}`,
                },
                body: JSON.stringify(requestBody),
            });

            if (response.ok) {
                console.log('Account information updated successfully');
            
                setShowSuccessModal(true);

            } else {
                console.error('Failed to update account information:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating account information:', error);
        }
    };

    const handleChangePassword = async () => {
        const id = Cookies.get('userId');
    
        if (!newPassword || !confirmPassword) {
          console.error('Both passwords are required');
          return;
        }

        if (newPassword !== confirmPassword) {
            console.error('Passwords do not match');
            return;
        }

        const requestBody = { password: newPassword };
    
        try {
          const response = await fetch(`http://127.0.0.1:7777/api/user/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${Cookies.get('token')}`,
            },
            body: JSON.stringify(requestBody),
          });
    
          if (response.ok) {
            console.log('Password updated successfully');
            
            setShowSuccessModal(true);
          } else {
            console.error('Failed to update password');
          }
        } catch (error) {
          console.error('Error:', error);
        }
    };

    const handleLogout = (e) => {

        e.preventDefault();
        Cookies.remove('token');
        Cookies.remove('userId');
    };

    const handleCloseModal = () => {
        setShowSuccessModal(false)
    };
   
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
                        <input className={styles.input} 
                            id="email" 
                            placeholder='Эл. адрес'
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}>
                            </input>
                        <input className={styles.input} 
                            id="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Имя пользователя'>
                        </input>
                        <button className={styles.saveButton} onClick={handleUpdateAccount}>
                            Сохранить изменения
                        </button>
                        <div className={styles.exit} onClick={handleLogout}>
                            <Link href="/">Выход</Link>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? styles.activeContent : styles.content}>
                        <input className={styles.input} 
                            id="pass" 
                            placeholder='Новый пароль'
                            value={newPassword} 
                            onChange={(e) => setNewPassword(e.target.value)}>
                        </input>
                        <input className={styles.input}
                            id="pass2" 
                            placeholder='Повторите пароль'
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)}>
                        </input>
                        <button className={styles.saveButton} onClick={handleChangePassword}>
                            Сохранить изменения
                        </button>
                        <div className={styles.exit} onClick={handleLogout}>
                            <Link href="/">Выход</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.image}>
                <Image fill src="/assets/images/account_img.svg" alt="mic" /> 
            </div> 
            {showSuccessModal && (
                <div className={styles.successModal}> 
                    <div className={styles.modalContent}>
                        <p>Данные успешно изменены</p>
                        <button onClick={handleCloseModal} className={styles.modalButton}>
                            <Link href = '/Account'>Ok</Link>
                        </button>
                    </div>
                </div>
            )}
            
        </main>

    )
};

export default Settings;