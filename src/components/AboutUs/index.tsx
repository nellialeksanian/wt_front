import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutUs.module.scss';

function AboutUs() {
    return (
    <div className={styles.about}>
       <div className={`container ${styles.wrapper}`}>
         <div className={styles.wrapper1}> 
                <div className={styles.about_block}>
                  <span className = {styles.textbig}>Чтец</span>
                  <span className = {styles.textsmall}>Генерация аудиофайлов с помощью ИИ</span>
                  <button className={styles.tryButton}>
                    <Link href = '#'>Попробовать бесплатно</Link>
                  </button>
                </div>
                <div className={styles.image}>
                     <Image fill src="/assets/images/mic-sound.svg" alt="mic" /> 
                </div> 
         </div>
         <div className={styles.wrapper2}>
                <span className={styles.textblue}>Текст а аудио в один клик!</span>
                <span className={styles.descsmall}>
                Генерируйте аудиофайлы из ваших текстов, используя разлчиные голоса и добавляя  аудиоэффекты
                </span>
         </div>
         <div className={styles.textBox}>
                <span className={styles.textcreate}>Создайте свою аудиозапись, используя Искусственный Интеллект</span>
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
         </div>
        </div>
    </div>

 );
};

export default AboutUs;
