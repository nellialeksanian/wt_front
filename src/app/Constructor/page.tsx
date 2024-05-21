"use client";

import React, {useState} from 'react';
import styles from './constructor.module.scss';
import Link from 'next/link';
import Image from 'next/image'
import Cookies from 'js-cookie';
import { join } from 'path';

function Constructor() {
  const [isOpen, setOpen] = useState(false);
  const userId = Cookies.get('userId'); 
  const [textMarkup, setTextMarkup] = useState('');
  const [audioSrc, setAudioSrc] = useState('');

  const handleTextChange = (e) => {
    setTextMarkup(e.target.value);
  };

  const handleConvert = async () => {
    try {
      const formData = { 
        text_markup: textMarkup, 
        userId: userId,
      }
      // Step 2: Send POST request to create text
      const createTextResponse = await fetch('http://127.0.0.1:7777/api/texts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('token')}`,
        },
        body: JSON.stringify(formData)
      });
      const data = await createTextResponse.json();
      const textId = data.id

      // Step 3: Send POST request to generate audio
      const formDataAudio = { 
        textId: textId,
      }
      const generateAudioResponse = await fetch('http://127.0.0.1:7777/api/audiofiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('token')}`,
        },
        body: JSON.stringify(formDataAudio),
      });

      const audioData = await generateAudioResponse.json();
      const audioId = audioData.id

      // Step 4: Send GET request to get audio URL
      const getAudioUrlResponse = await fetch(`http://127.0.0.1:7777/api/audiofiles/download/${audioId}`, {
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`,
        },
      });
      const blob = await getAudioUrlResponse.blob();
      const audioUrl = URL.createObjectURL(blob);
      const audioElement = document.getElementById('myAudio');
      if (audioElement instanceof HTMLAudioElement && audioUrl) {
        audioElement.src = audioUrl;
      } else {
        console.error('Failed to find audio element or audio URL is invalid.');
      }
      console.log(audioUrl);
      //setAudioSrc(audioUrl);
    

      console.log(audioSrc);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleShowVoiceMenu = () => {
    setOpen(!isOpen);
  };


  return (
    <main className={styles.constructor}>
      <nav className={styles.text}>
        <div className={styles.title}>
          Преобразовать текст в аудиозапись
          </div>
        <div className={styles.description}>
        Введите размеченный текст в поле ниже, чтобы преобразовать его в аудиозапись
        </div>
      </nav>
      <div className={styles.input_space}>
        <textarea className={styles.input_field} placeholder="text"  value={textMarkup} onChange={ handleTextChange } />
        <span className={styles.character_count}>10000/10000 символов</span>
      </div>
      <div className={styles.buttons}>
        <div className={styles.wrapperleft}>
          <button className={styles.Button1} onClick={() => setOpen(!isOpen)}>Голоса</button>
          <nav className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
            <div className={styles.voice}>
              <Link href="#" className={styles.iconwoman}>
                <Image fill src="assets/icons/woman.svg" alt="icon" />
              </Link>
              <div className={styles.name}>Alena</div>
            </div>
            <div className={styles.voice}>
              <Link href="#" className={styles.iconman}>
                <Image fill src="assets/icons/man.svg" alt="icon" />
              </Link>
              <div className={styles.name}>Maxim</div>
            </div>
            <div className={styles.voice}>
              <Link href="#" className={styles.iconman}>
                <Image fill src="assets/icons/man.svg" alt="icon" />
              </Link>
              <div className={styles.name}>Iliya</div>
            </div>
            <div className={styles.voice}>
              <Link href="#" className={styles.iconwoman}>
                <Image fill src="assets/icons/woman.svg" alt="icon" />
              </Link>
              <div className={styles.name}>Tatiana</div>
            </div>
            <div className={styles.voice}>
              <Link href="#" className={styles.iconman}>
                <Image fill src="assets/icons/man.svg" alt="icon" />
              </Link>
              <div className={styles.name}>Vova</div>
            </div>
          </nav>
        </div>
        <div className={styles.wrapperright}>
          <button className={styles.Button2} onClick={handleConvert}>Конвертировать</button>
          <div className={styles.gentext}>Количество бесплатных попыток ограничено: 10 генераций в день</div>
        </div>
      </div>
      <div className={styles.audioserch}>
        <div className={styles.title}>Созданные аудиозаписи</div>
        <div className={styles.searchbar}>
          <input type="text" className={styles.searchfield} placeholder='audio'/>
          <Link href="/" className={styles.searchbutton}>
            <Image fill src="assets/icons/search.svg" alt="icon" />
          </Link>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.wrapperbottom}>
          <audio controls className={styles.customAudio}>
            <source src='/assets/audio/audio_1.mp3'></source>
          </audio>
          <button className={styles.iconsgen}></button>
          </div>
          <div className={styles.wrapperbottom}>
          <audio id = 'myAudio' controls className={styles.customAudio}>
            <source src="" type='type="audio/wav'></source>
          </audio>
          <button className={styles.iconsgen}></button>
          </div>
        </div>
    </main>
  );
}
export default Constructor;