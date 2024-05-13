import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutUs.module.scss';

function AboutUs() {
    return (
    <div className={`container ${styles.wrapper}`}>
        <div id="AboutUs" className={styles.block_1}> 
            <div className={styles.about_block}>
                <span className = {styles.textbig}>Чтец</span>
                <span className = {styles.textsmall}>Генерация аудиофайлов с помощью ИИ</span>
                <button className={styles.tryButton}>
                  <Link href = '/Constructor'>Попробовать бесплатно</Link>
                </button>
            </div>
            <div className={styles.image}>
                <Image fill src="/assets/images/mic-sound.svg" alt="mic" /> 
            </div> 
        </div>
        <div className={styles.block_2}>
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
                    <source src='/assets/audio/audio_1.mp3'></source>
                </audio>
                <audio controls className={styles.customAudio}>
                    <source src='/assets/audio/audio_1.mp3'></source>
                </audio>
                <audio controls className={styles.customAudio}>
                    <source src='/assets/audio/audio_1.mp3'></source>
                </audio>
            </div>
            <div className={styles.like_comment_list}>
                <div className={styles.like_comment}>
                    <Link href="/" className={styles.like}>
                         <Image fill src="/assets/icons/like.svg" alt="like" />
                    </Link>
                    <Link href="/" className={styles.comment}>
                        <Image fill src="/assets/icons/comment.svg" alt="comment" />
                    </Link>
                </div>
                <div className={styles.like_comment}>
                    <Link href="/" className={styles.like}>
                        <Image fill src="/assets/icons/like.svg" alt="like" />
                    </Link>
                <Link href="/" className={styles.comment}>
                    <Image fill src="/assets/icons/comment.svg" alt="comment" />
                </Link>
            </div>
            <div className={styles.like_comment}>
                <Link href="/" className={styles.like}>
                    <Image fill src="/assets/icons/like.svg" alt="like" />
                </Link>
                <Link href="/" className={styles.comment}>
                    <Image fill src="/assets/icons/comment.svg" alt="comment" />
                </Link>
            </div>
            </div>
            </div>
            <div className={styles.audioWrapper}>
            <div className={styles.audioList}>
                <audio controls className={styles.customAudio}>
                    <source src='/assets/audio/audio_1.mp3'></source>
                </audio>
                <audio controls className={styles.customAudio}>
                    <source src='/assets/audio/audio_1.mp3'></source>
                </audio>
                <audio controls className={styles.customAudio}>
                    <source src='/assets/audio/audio_1.mp3'></source>
                </audio>
            </div>
            <div className={styles.like_comment_list}>
                <div className={styles.like_comment}>
                    <Link href="/" className={styles.like}>
                         <Image fill src="/assets/icons/like.svg" alt="like" />
                    </Link>
                    <Link href="/" className={styles.comment}>
                        <Image fill src="/assets/icons/comment.svg" alt="comment" />
                    </Link>
                </div>
                <div className={styles.like_comment}>
                    <Link href="/" className={styles.like}>
                        <Image fill src="/assets/icons/like.svg" alt="like" />
                    </Link>
                <Link href="/" className={styles.comment}>
                    <Image fill src="/assets/icons/comment.svg" alt="comment" />
                </Link>
            </div>
            <div className={styles.like_comment}>
                <Link href="/" className={styles.like}>
                    <Image fill src="/assets/icons/like.svg" alt="like" />
                </Link>
                <Link href="/" className={styles.comment}>
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
