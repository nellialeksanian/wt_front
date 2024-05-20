"use client";

import React, {useState} from 'react';
import styles from './constructor.module.scss';
import Link from 'next/link';
import Image from 'next/image'
import Cookies from 'js-cookie';

function Constructor() {
  const [isOpen, setOpen] = useState(false);
  const [text_markup, setText] = useState('');
  const [audioId, setAudioId] = useState(''); // Состояние для ID аудио
  const [audioUrl, setAudioUrl] = useState(''); // Состояние для URL аудио
  const userId = Cookies.get('userId'); 


  const handleShowVoiceMenu = () => {
    setOpen(!isOpen);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleConvert = async () => {
    try {
        const formData = {
          text_markup: text_markup,
          userId: userId,
        };
      const response = await fetch('http://127.0.0.1:7777/api/texts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('token')}`,
        },
        body: JSON.stringify(formData), // Отправляем текст и ID пользователя
      });

      if (!response.ok) {
        throw new Error('Ошибка при сохранении текста');
      }

      const data = await response.json();
      setAudioId(data.id); // Получаем ID из ответа сервера

      // 2. Используем ID для генерации аудио
      await generateAudio(data.id);

      // 3. Обновляем состояние для отображения аудио
      // (Допустим, что `generateAudio` устанавливает `audioUrl`)
    } catch (error) {
      console.error('Ошибка при конвертации:', error);
      // Обработка ошибки: отобразить сообщение пользователю
    }
  };

  const generateAudio = async (audioId: string) => {
    // Здесь вызывается API для генерации аудио
    try {

      const formDataAudio = {
        textId: audioId,
      };

      const response = await fetch('http://127.0.0.1:7777/api/audiofiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('token')}`, // Добавляем Authorization
        },
        body: JSON.stringify(formDataAudio), // Отправляем ID текста
      });

      if (!response.ok) {
        throw new Error('Ошибка при генерации аудио');
      }

      const data = await response.json();
      setAudioUrl(data.audioUrl); // Получаем URL аудио из ответа сервера

      // Обработка успешной генерации аудио
      console.log('Аудио успешно сгенерировано');
    } catch (error) {
      console.error('Ошибка при генерации аудио:', error);
      // Обработка ошибки: отобразить сообщение пользователю
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
        <textarea className={styles.input_field} placeholder="text"  value={text_markup} onChange={ handleTextChange } />
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
        <div className={styles.title}>Созданные аудизаписи</div>
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
          <audio controls className={styles.customAudio}>
            <source src={audioUrl} />
          </audio>
          <button className={styles.iconsgen}></button>
          </div>
        </div>
    </main>
  );
}
export default Constructor;