"use client"
import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutUs.module.scss';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

function AboutUs() {
    const token = Cookies.get('token');
    const router = useRouter();
  
    const handleTryClick = () => {
      if (token) {
        router.push('/Constructor'); // Redirect to Constructor with token
      } else {
        // Redirect to login if no token
        router.push('/Enter');
      }
    };

    return (
    <div className={`container ${styles.wrapper}`}>
        <div id="AboutUs" className={styles.block_1}> 
            <div className={styles.about_block}>
                <span className = {styles.textbig}>Чтец</span>
                <span className = {styles.textsmall}>Генерация аудиофайлов с помощью ИИ</span>
                <button className={styles.tryButton} onClick={handleTryClick}>
                    Попробовать бесплатно{/* <Link href = '/Constructor'>Попробовать бесплатно</Link> */}
                </button>
            </div>
            <div className={styles.image}>
                <Image fill src="/assets/images/mic-sound.svg" alt="mic" /> 
            </div> 
        </div>
        <div id ="AboutUs2" className={styles.block_2}>
            <span className={styles.textblue}>Текст в аудио в один клик!</span>
            <span className={styles.descsmall}>Генерируйте аудиофайлы из ваших текстов, используя разлчиные голоса и добавляя  аудиоэффекты </span>
        </div>
        <div id="AIvoice" className={styles.textBox}>
            <span className={styles.textcreate}>Создайте свою аудиозапись, используя Искусственный Интеллект</span>
        </div>
        <div className={styles.audio_block}>
            <div className={styles.audioWrapper}>
            <div className={styles.audioList}>
                <audio controls className={styles.customAudio}>
                    <source src='assets/audio/d1e57e2a-0dd4-4ae0-a7e7-6ec6df9ca3d8.wav'></source>
                </audio>
                <audio controls className={styles.customAudio}>
                    <source src='assets/audio/audio_10_1711464174489.wav'></source>
                </audio>
                <audio controls className={styles.customAudio}>
                    <source src='assets/audio/ea428496-313d-4c9e-ad55-1dfe62e709e6.wav'></source>
                </audio>
            </div>
            <div className={styles.like_comment_list}>
                <div className={styles.like_comment}>
                    <Link href="/" className={styles.like}>
                         <Image fill src="/assets/icons/like.svg" alt="like" />
                    </Link>
                    <Link href="/Comments" className={styles.comment}>
                        <Image fill src="/assets/icons/comment.svg" alt="comment" />
                    </Link>
                </div>
                <div className={styles.like_comment}>
                    <Link href="/" className={styles.like}>
                        <Image fill src="/assets/icons/like.svg" alt="like" />
                    </Link>
                <Link href="/Comments" className={styles.comment}>
                    <Image fill src="/assets/icons/comment.svg" alt="comment" />
                </Link>
            </div>
            <div className={styles.like_comment}>
                <Link href="/" className={styles.like}>
                    <Image fill src="/assets/icons/like.svg" alt="like" />
                </Link>
                <Link href="/Comments" className={styles.comment}>
                    <Image fill src="/assets/icons/comment.svg" alt="comment" />
                </Link>
            </div>
            </div>
            </div>
            <div className={styles.audioWrapper}>
            <div className={styles.audioList}>
                <audio controls className={styles.customAudio}>
                    <source src='assets/audio/cfbd36e7-7c83-4a62-8ea7-ed59382cf542 (2).wav'></source>
                </audio>
                <audio controls className={styles.customAudio}>
                    <source src='assets/audio/audio_11_1711524730787.wav'></source>
                </audio>
                <audio controls className={styles.customAudio}>
                    <source src='assets/audio/audio1.wav'></source>
                </audio>
            </div>
            <div className={styles.like_comment_list}>
                <div className={styles.like_comment}>
                    <Link href="/" className={styles.like}>
                         <Image fill src="/assets/icons/like.svg" alt="like" />
                    </Link>
                    <Link href="/Comments" className={styles.comment}>
                        <Image fill src="/assets/icons/comment.svg" alt="comment" />
                    </Link>
                </div>
                <div className={styles.like_comment}>
                    <Link href="/" className={styles.like}>
                        <Image fill src="/assets/icons/like.svg" alt="like" />
                    </Link>
                <Link href="/Comments" className={styles.comment}>
                    <Image fill src="/assets/icons/comment.svg" alt="comment" />
                </Link>
            </div>
            <div className={styles.like_comment}>
                <Link href="/" className={styles.like}>
                    <Image fill src="/assets/icons/like.svg" alt="like" />
                </Link>
                <Link href="/Comments" className={styles.comment}>
                    <Image fill src="/assets/icons/comment.svg" alt="comment" />
                </Link>
            </div>
            </div>
            </div>
        </div>
    </div>
 );
};

export default AboutUs;
