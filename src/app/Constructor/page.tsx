import styles from './constructor.module.scss';
import Link from 'next/link';
import Image from 'next/image'

export default function Constructor() {
  return (
    <main className={styles.construct}>
      <nav className={styles.text}>
        <div className={styles.title}>
          Преобразовать текст в аудиозапись
          </div>
        <div className={styles.description}>
        Введите размеченный текст в поле ниже, чтобы преобразовать его в аудиозапись
        </div>
      </nav>
      <div className={styles.input_space}>
        <textarea className={styles.input_field} defaultValue="text" />
        <span className={styles.character_count}>10000/10000 символов</span>
      </div>
      <div className={styles.buttons}>
        <div className={styles.wrapperleft}>
          <button className={styles.Button1}>
            <Link href = "#">Голоса</Link>
          </button>
          <div className={styles.voices}>
            <div className={styles.voice}>
              <Link href="/" className={styles.iconwoman}>
                <Image fill src="assets/icons/woman.svg" alt="icon" />
              </Link>
              <div className={styles.name}>Alena</div>
            </div>
            <div className={styles.voice}>
              <Link href="/" className={styles.iconman}>
                <Image fill src="assets/icons/man.svg" alt="icon" />
              </Link>
              <div className={styles.name}>Maxim</div>
            </div>
            <div className={styles.voice}>
              <Link href="/" className={styles.iconman}>
                <Image fill src="assets/icons/man.svg" alt="icon" />
              </Link>
              <div className={styles.name}>Iliya</div>
            </div>
            <div className={styles.voice}>
              <Link href="/" className={styles.iconwoman}>
                <Image fill src="assets/icons/woman.svg" alt="icon" />
              </Link>
              <div className={styles.name}>Tatiana</div>
            </div>
            <div className={styles.voice}>
              <Link href="/" className={styles.iconman}>
                <Image fill src="assets/icons/man.svg" alt="icon" />
              </Link>
              <div className={styles.name}>Vova</div>
            </div>
          </div>
        </div>
        <div className={styles.wrapperright}>
          <button className={styles.Button2}>
            <Link href = "#">Конвертировать</Link>
          </button>
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
      <div className={styles.bootmtext}>
        <div className={styles.gentext2}>Дата</div>
        <div className={styles.gentext2}>Название</div>
        <div className={styles.gentext2}>Извлечено</div>
        <div className={styles.gentext2}>Тайминг</div>
        <div className={styles.gentext2}>Взаимодействие</div>
      </div>
      <div className={styles.wrappertop}>
        <div className={styles.bootmtext2}>
          <div className={styles.gentext3}>10.05.24</div>
          <div className={styles.gentext3}>BestAudioEver</div>
          <div className={styles.gentext3}>10.05.24</div>
          </div>
          <div className={styles.gentext3}>00.07</div>
        <div className={styles.iconstogether}>
          <Link href="#" className={styles.iconsgen}>
            <Image fill src="assets/icons/play.svg" alt="icon" />
          </Link>
          <Link href="#" className={styles.iconsgen}>
            <Image fill src="assets/icons/cloud.svg" alt="icon" />
          </Link>
          <Link href="#" className={styles.iconsgen}>
            <Image fill src="assets/icons/trash.svg" alt="icon" />
          </Link>
        </div>
        </div>
    </main>
  );
}
