"use client";

import React, {useState, useRef, useEffect } from 'react';
import styles from './constructor.module.scss';
import Link from 'next/link';
import Image from 'next/image'
import Cookies from 'js-cookie';
import { join } from 'path';

function Constructor() {
  const [isOpen, setOpen] = useState(false);
  const userId = Cookies.get('userId'); 
  const [textMarkup, setTextMarkup] = useState('');
  const [audioId, setAudioId] = useState();
  const [audioSrc, setAudioSrc] = useState([]); // Массив для хранения URL аудиофайлов
  const audioElements = useRef<HTMLAudioElement[]>([]); // Массив для хранения элементов <audio>
  const [loading, setLoading] = useState(false);

  const handleTextChange = (e) => {
    setTextMarkup(e.target.value);
  };

  const handleConvert = async () => {
    setLoading(true);
    try {
      const formData = {
        text_markup: textMarkup,
        userId: userId,
      };

      // Step 2: Send POST request to create text
      const createTextResponse = await fetch('http://127.0.0.1:7777/api/texts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('token')}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await createTextResponse.json();
      const textId = data.id;

      // Step 3: Send POST request to generate audio
      const formDataAudio = {
        textId: textId,
      };
      const generateAudioResponse = await fetch('http://127.0.0.1:7777/api/audiofiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('token')}`,
        },
        body: JSON.stringify(formDataAudio),
      });

      const audioData = await generateAudioResponse.json();
      const audioId = audioData.id;
      setAudioId(audioId);

      // Step 4: Send GET request to get audio URL
      const getAudioUrlResponse = await fetch(`http://127.0.0.1:7777/api/audiofiles/download/${audioId}`, {
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`,
        },
      });
      const blob = await getAudioUrlResponse.blob();
      const audioUrl = URL.createObjectURL(blob);

      // Добавляем новый аудиофайл в массив
      setAudioSrc([audioUrl, ...audioSrc]);
      console.log(audioUrl);

      // Создаем новый элемент <audio>
      const newAudioElement = document.createElement('audio');
      newAudioElement.src = audioUrl;
      newAudioElement.controls = true;
      newAudioElement.className = styles.customAudio;

      // Сохраняем ссылку на новый элемент
      audioElements.current.push(newAudioElement);
    } catch (error) {
      console.error('Error:', error);
    }
    finally {
      setLoading(false); // Завершение загрузки
    }
  };

  const handleShowVoiceMenu = () => {
    setOpen(!isOpen);
  };

  const handleDeleteAudio = async (index: number) => {
    try {
      // Отправляем запрос DELETE на сервер (получаем audioId из audioSrc[index])
      const name = audioSrc[index]; // Предполагаем, что audioId хранится в audioSrc
      const deleteResponse = await fetch(`http://127.0.0.1:7777/api/audiofiles/delite/${audioId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${Cookies.get('token')}`,
        },
      });

      // Удаляем элемент <audio> из DOM
      audioElements.current[index].remove();

      // Обновляем массив audioSrc и audioElements
      setAudioSrc(audioSrc.filter((_, i) => i !== index));
      audioElements.current.splice(index, 1);
    } catch (error) {
      console.error('Error deleting audio:', error);
    }
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
        <textarea className={styles.input_field} placeholder="text" value={textMarkup} onChange={handleTextChange} />
        <span className={styles.character_count}>10000/10000 символов</span>
      </div>
      <div className={styles.buttons}>
        <div className={styles.wrapperleft}>
          <button className={styles.Button1} onClick={() => setOpen(!isOpen)}>
            Голоса
          </button>
          <nav className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
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
          <button className={styles.Button2} onClick={handleConvert} disabled={loading}>
            {loading ? 'Конвертируется...' : 'Конвертировать'}
          </button>
          <div className={styles.gentext}>
            Количество бесплатных попыток ограничено: 10 генераций в день
          </div>
        </div>
      </div>
      <div className={styles.audioserch}>
        <div className={styles.title}>Созданные аудиозаписи</div>
        <div className={styles.searchbar}>
          <input type="text" className={styles.searchfield} placeholder="audio" />
          <Link href="/" className={styles.searchbutton}>
            <Image fill src="assets/icons/search.svg" alt="icon" />
          </Link>
        </div>
      </div>
      <div className={styles.list}>
        {audioSrc.map((audioUrl, index) => (
          <div key={index} className={styles.wrapperbottom}>
            <audio controls className={styles.customAudio}>
              <source src={audioUrl} type="audio/wav" />
            </audio>
            <button className={styles.iconsgen} onClick={() => handleDeleteAudio(index)}>
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Constructor;