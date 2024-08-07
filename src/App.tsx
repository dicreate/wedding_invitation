import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Main, Map, Schedule, Gallery, Questions, Timer, Modal, Form } from "./components"
import style from "./app.module.scss"
import { Notifications } from '@mantine/notifications';

import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core';
import { YMaps } from "@pbe/react-yandex-maps";
import { FaPhotoVideo } from "react-icons/fa";
import Contacts from './components/Contacts';
import Lottie from 'lottie-react';
import heart from "./animations/heart.json";
import we from "./animations/we.json";
import loveStory from "./animations/lovestory.json";
import schedule from "./animations/schedule.json";
import church from "./animations/church.json";
import glass from "./animations/glass.json";
import questions from "./animations/questions.json"
import invitation from "./animations/invitation.json"
import contacts from "./animations/contacts.json"

function App() {

  const [modalActive, setModalActive] = useState<boolean>(false);
  const [mapCoordinates, setMapCoordinates] = useState<[number, number]>([53.964824, 25.124172]);
  const [mapBalloon, setMapBalloon] = useState<string>("Гродненская область, Вороновский район");
  const [key, setKey] = useState<number>(0)

  const handleSpanClick = (coordinates: [number, number], balloon: string) => {
    setMapCoordinates(coordinates);
    setMapBalloon(balloon);
    setModalActive(true);
    setKey(prevKey => prevKey + 1); // Увеличиваем ключ, чтобы вызвать повторную отрисовку Map
  }

  gsap.registerPlugin(ScrollTrigger);

  const invitationRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);
  const questionsRef = useRef<HTMLDivElement>(null);
  const presenceRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    gsap.from(invitationRef.current, {
      opacity: 0,
      x: -500,
      duration: 1.4,
      scrollTrigger: {
        trigger: invitationRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(scheduleRef.current, {
      opacity: 0,
      x: -500,
      duration: 1.4,
      scrollTrigger: {
        trigger: scheduleRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(questionsRef.current, {
      opacity: 0,
      x: -500,
      duration: 1.4,
      scrollTrigger: {
        trigger: questionsRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(presenceRef.current, {
      opacity: 0,
      x: -500,
      duration: 1.4,
      scrollTrigger: {
        trigger: presenceRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(contactsRef.current, {
      opacity: 0,
      x: -500,
      duration: 1.4,
      scrollTrigger: {
        trigger: contactsRef.current,
        toggleActions: 'play none none reverse',
      }
    })
  }, []);

  return (
    <YMaps
      query={{
        apikey: 'e5fbadfd-8732-41d7-84b8-04bd64adc323',
        lang: 'ru_RU',
        load: 'package.full',
      }}
      preload={true}
    >
      <MantineProvider>
        <div className={style.appContainer}>
          <section>
            <Main
              text={
                <div className={style.main}>
                  <span className={style.mainDate}>24.08.2024</span>
                  <span className={style.mainName}>Дима</span>
                  <div className={style.mainHeart}>♥</div>
                  <span className={style.mainName}>Карина</span>
                </div>
              }
            />
          </section>

          <div id="invited"></div>

          <section className={style.section}>
            <div className={style.sectionContent}>
              <div className={style.sectionTitleContainer}>
                <h3 className={style.sectionTitle}>Дима 🕊 Карина</h3>
                <div className={style.sectionAnimation}><Lottie animationData={we} /></div>
              </div>
              <div className={style.invitation} >
                <div ref={invitationRef}>
                  <p>Дорогие родные, близкие и друзья!</p>
                  <p>24 августа 2024 года состоится неповторимый и незабываемый для нас праздник - день нашей свадьбы ✨.</p>
                  <p>Нам будет очень приятно, если вы придете и сможете разделить с нами радостные моменты в волнующей атмосфере любви и счастья!</p>
                  <p>Ниже предлагаем вам ознакомиться с таймингом дня и подтвердить свое присутствие заполнением маленькой анкеты ❤️.</p>
                </div>
                <div className={style.invitationPhotos}>
                  <div>
                    <img src="./me.webp" alt="me" />
                  </div>
                  <div>
                    <Lottie animationData={heart} />
                  </div>
                  <div>
                    <img src="./she.webp" alt="she" />
                  </div>
                </div>
                <Timer />
              </div>
            </div>
          </section>

          <div id="loveStory"></div>

          <section className={style.section}>
            <div className={style.sectionContent}>
              <div className={style.sectionTitleContainer}>
                <h3 className={style.sectionTitle}>Love Story</h3>
                <div className={style.sectionAnimation}><Lottie animationData={loveStory} /></div>
              </div>
            </div>
            <div>
              <Gallery
                photos={[
                  { id: 8, src: "./photos/8.webp", preview: "./photos/preview/8.webp", description: "photo 8" },
                  { id: 9, src: "./photos/9.webp", preview: "./photos/preview/9.webp", description: "photo 9" },
                  { id: 10, src: "./photos/10.webp", preview: "./photos/preview/10.webp", description: "photo 10" },
                  { id: 11, src: "./photos/11.webp", preview: "./photos/preview/11.webp", description: "photo 11" },
                  { id: 1, src: "./photos/1.webp", preview: "./photos/preview/1.webp", description: "photo 1" },
                  { id: 2, src: "./photos/2.webp", preview: "./photos/preview/2.webp", description: "photo 2" },
                  { id: 3, src: "./photos/3.webp", preview: "./photos/preview/3.webp", description: "photo 3" },
                  { id: 4, src: "./photos/4.webp", preview: "./photos/preview/4.webp", description: "photo 4" },
                  { id: 5, src: "./photos/5.webp", preview: "./photos/preview/5.webp", description: "photo 5" },
                  { id: 6, src: "./photos/6.webp", preview: "./photos/preview/6.webp", description: "photo 6" },
                  { id: 7, src: "./photos/7.webp", preview: "./photos/preview/7.webp", description: "photo 7" },
                ]} />
            </div>
          </section>

          <div id="schedule"></div>

          <section className={`${style.section} ${style.schedule}`}>
            <div className={style.sectionContent}>
              <div className={style.sectionTitleContainer}>
                <h3 className={style.sectionTitle}>Программа свадебного дня</h3>
                <div style={{ maxWidth: 180 }}><Lottie animationData={schedule} /></div>
              </div>
              <div ref={scheduleRef} style={{ marginTop: '50px' }}>
                <span className={style.scheduleDate}>24 августа 2024 г.</span>
                <Schedule handleSpanClick={handleSpanClick} />
              </div>
              <Modal active={modalActive} setActive={setModalActive}>
                <Map coordinates={mapCoordinates} balloon={mapBalloon} key={key} />
              </Modal>
            </div>
          </section>

          <div id="ceremonyMap"></div>

          <section className={style.section} >
            <div className={style.sectionContent}>
              <h3 className={style.sectionTitle}>Венчание</h3>
              <div className={style.sectionAnimation}><Lottie animationData={church} /></div>
              <span>Костёл Милосердия Божьего</span>
              <span className={style.address}>ул. Строителей, 66, Лида</span>
            </div>
            <div>
              <Map coordinates={[53.92178, 25.24656]} balloon={"ул. Строителей, 66, Лида"} />
            </div>
          </section>

          <div id="dinnerMap"></div>

          <section className={style.section}>
            <div className={style.sectionContent}>
              <h3 className={style.sectionTitle}>Выездная регистрация и банкет</h3>
              <div className={style.sectionAnimation}><Lottie animationData={glass} /></div>
              <span>Усадьба "Барыш"</span>
              <span className={style.address}>Гродненская область, Вороновский район</span>
            </div>
            <div>
              <Map coordinates={[53.964824, 25.124172]} balloon="Гродненская область, Вороновский район" />
            </div>
          </section>

          <div id="questions"></div>

          <section className={style.section}>
            <div className={style.sectionContent}>
              <h3 className={style.sectionTitle}>Отвечаем на ваши вопросы</h3>
              <div className={style.sectionAnimation}><Lottie animationData={questions} /></div>
            </div>
            <div ref={questionsRef}>
              <Questions />
            </div>
          </section>

          <div id="presence"></div>

          <section className={style.section}>
            <div className={style.sectionContent}>
              <h3 className={style.sectionTitle}>Подтвердите своё присутствие</h3>
              <div className={style.sectionAnimation}><Lottie animationData={invitation} /></div>
            </div>
            <div ref={presenceRef}>
              <Form />
            </div>
          </section>

          <div id="contacts"></div>

          <section className={style.section}>
            <div className={style.sectionContent}>
              <h3 className={style.sectionTitle}>Контакты</h3>
              <div className={style.sectionAnimation}><Lottie animationData={contacts} /></div>
            </div>
            <div ref={contactsRef}>
              <Contacts />
            </div>
          </section>

          <footer className={style.footer}>
            <div className={style.footerText}>Будем рады видеть вас на нашей свадьбе !</div>
            <div className={style.footerIcon}><FaPhotoVideo /></div>
            <div className={style.footerLink}>Здесь будет ссылка на свадебные фотографии и видео после свадьбы</div>
            <div></div>
          </footer>
          <div className={style.notification} >
            <Notifications />
          </div>
        </div>
      </MantineProvider>
    </YMaps>
  )
}

export default App
