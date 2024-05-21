"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Account.module.scss';
import Cookies from 'js-cookie';
import { cookies } from 'next/headers';
import { useRouter } from 'next/router';

function Account() {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        registrationDate: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            const token = Cookies.get('token');
            console.log('Token:', token); 

            if (token) {
                try {
                    const response = await fetch('http://127.0.0.1:7777/api/user/me', {
                        headers: {
                            'Accept': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    console.log('Response status:', response.status); 

                    if (response.ok) {
                        const data = await response.json();
                        console.log('Fetched data:', data); 
                        setUserData({
                            username: data.username,
                            email: data.email,
                            registrationDate: data.createdAt
                        });
                    } else {
                        console.error('Failed to fetch user data:', response.statusText);
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            } else {
                console.error('No token found');
            }
        };

        fetchUserData();
    }, []);

    const handleLogout = (e) => {

        e.preventDefault();
        Cookies.remove('token');
        Cookies.remove('userId');
    };

    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
      
        return `${day}/${month}/${year}`;
    }

    return (
        <main className={styles.account}>
            <div className={styles.container}>
                <span className={styles.text1}>Профиль</span>
                <div className={styles.containerMedium}>
                    <div className={styles.containerSmall}>
                        <span className={styles.text2}>Имя Пользователя</span>
                        <span id='username' className={styles.text3}>{userData.username}</span>
                    </div>
                    <div className={styles.containerSmall}>
                        <span className={styles.text2}>Эл. почта</span>
                        <span id='email' className={styles.text3}>{userData.email}</span>
                    </div>
                    <div className={styles.containerSmall}>
                        <span className={styles.text2}>Дата регистрации</span>
                        <span id='date' className={styles.text3}>{formatDate(userData.registrationDate)}</span>
                    </div>
                </div>
                <button className={styles.saveButton}>
                    <Link href='/Settings'>Настройки аккаунта</Link>
                </button>
                <div onClick={handleLogout} className={styles.exit}>
                    <Link href="/">Выход</Link>
                </div>
            </div>
            <div className={styles.image}>
                <Image fill src="/assets/images/account_img.svg" alt="mic" />
            </div>
        </main>
    );
}

export default Account;
