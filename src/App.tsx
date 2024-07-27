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
import { GiLovers, GiGloves } from "react-icons/gi";
import { PiChurch } from "react-icons/pi";
import { FaUtensils, FaPhotoVideo } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { GrDocumentVerified } from "react-icons/gr";
import { IoIosContacts } from "react-icons/io";
import Contacts from './components/Contacts';
import Lottie from 'lottie-react';
import heart from "../public/animations/heart.json";

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
  const galleryRef = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLDivElement>(null);
  const nuptialsRef = useRef<HTMLDivElement>(null);
  const weddingRef = useRef<HTMLDivElement>(null);
  const invitationTitleRef = useRef<HTMLDivElement>(null);
  const galleryTitleRef = useRef<HTMLDivElement>(null);
  const scheduleTitleRef = useRef<HTMLDivElement>(null);
  const nuptialsTitleRef = useRef<HTMLDivElement>(null);
  const weddingTitleRef = useRef<HTMLDivElement>(null);
  const questionsTitleRef = useRef<HTMLDivElement>(null);
  const presenceTitleRef = useRef<HTMLDivElement>(null);
  const presenceRef = useRef<HTMLDivElement>(null);
  const contactsTitleRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    gsap.from(invitationTitleRef.current, {
      opacity: 0,
      y: -100,
      duration: 2,
      scrollTrigger: {
        trigger: invitationTitleRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(invitationRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: invitationRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(scheduleTitleRef.current, {
      opacity: 0,
      y: -100,
      duration: 2,
      scrollTrigger: {
        trigger: scheduleTitleRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(scheduleRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: scheduleRef.current,
        toggleActions: 'play none none reverse',
      }
    })


    gsap.from(questionsTitleRef.current, {
      opacity: 0,
      y: -100,
      duration: 2,
      scrollTrigger: {
        trigger: questionsTitleRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(questionsRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: questionsRef.current,
        toggleActions: 'play none none reverse',
      }
    })


    gsap.from(galleryTitleRef.current, {
      opacity: 0,
      y: -100,
      duration: 2,
      scrollTrigger: {
        trigger: galleryTitleRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(galleryRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: galleryRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    const tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(heartRef.current, { duration: 0.3, scale: 1.1, y: -5 }, { duration: 0.3, scale: 1, y: 0 });

    gsap.from(nuptialsTitleRef.current, {
      opacity: 0,
      y: -100,
      duration: 2,
      scrollTrigger: {
        trigger: nuptialsTitleRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(nuptialsRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: nuptialsRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(weddingTitleRef.current, {
      opacity: 0,
      y: -100,
      duration: 2,
      scrollTrigger: {
        trigger: weddingTitleRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(weddingRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: weddingRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(presenceTitleRef.current, {
      opacity: 0,
      y: -100,
      duration: 2,
      scrollTrigger: {
        trigger: presenceTitleRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(presenceRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: presenceRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(contactsTitleRef.current, {
      opacity: 0,
      y: -100,
      duration: 2,
      scrollTrigger: {
        trigger: contactsTitleRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(contactsRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
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
              <div ref={invitationTitleRef}>
                <h3 className={style.sectionTitle}>Дима 🕊 Карина</h3>
                <div className={style.sectionIcon}><GiLovers /></div>
              </div>
              <div className={style.invitation} ref={invitationRef}>
                <p>Дорогие родные, близкие и друзья!</p>
                <p>24 августа 2024 года состоится неповторимый и незабываемый для нас праздник - день нашей свадьбы ✨.</p>
                <p>Нам будет очень приятно, если вы придете и сможете разделить с нами радостные моменты в волнующей атмосфере любви и счастья!</p>
                <p>Ниже предлагаем вам ознакомиться с таймингом дня и подтвердить свое присутствие заполнением маленькой анкеты ❤️.</p>
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
              <div ref={galleryTitleRef}>
                <h3 className={style.sectionTitle}>Love Story</h3>
                <div className={style.sectionIcon}><GiGloves /></div>
              </div>
            </div>
            <div ref={galleryRef}>
              <Gallery
                photos={[
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
              <div ref={scheduleTitleRef}>
                <h3 className={style.sectionTitle}>Программа свадебного дня</h3>
                <div className={style.sectionIcon}><GrSchedules /></div>
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
            <div className={style.sectionContent} ref={nuptialsTitleRef}>
              <h3 className={style.sectionTitle}>Венчание</h3>
              <div className={style.sectionIcon}><PiChurch /></div>
              <span>Костёл Милосердия Божьего</span>
              <span className={style.address}>ул. Строителей, 66, Лида</span>
            </div>
            <div ref={nuptialsRef}>
              <Map coordinates={[53.92178, 25.24656]} balloon={"ул. Строителей, 66, Лида"} />
            </div>
          </section>

          <div id="dinnerMap"></div>

          <section className={style.section}>
            <div className={style.sectionContent} ref={weddingTitleRef}>
              <h3 className={style.sectionTitle}>Выездная регистрация и банкет</h3>
              <div className={style.sectionIcon}><FaUtensils /></div>
              <span>Усадьба "Барыш"</span>
              <span className={style.address}>Гродненская область, Вороновский район</span>
            </div>
            <div ref={weddingRef}>
              <Map coordinates={[53.964824, 25.124172]} balloon="Гродненская область, Вороновский район" />
            </div>
          </section>

          <div id="questions"></div>

          <section className={style.section}>
            <div className={style.sectionContent} ref={questionsTitleRef}>
              <h3 className={style.sectionTitle}>Отвечаем на ваши вопросы</h3>
              <div className={style.sectionIcon}><FaPersonCircleQuestion /></div>
            </div>
            <div ref={questionsRef}>
              <Questions />
            </div>
          </section>

          <div id="presence"></div>

          <section className={style.section}>
            <div className={style.sectionContent} ref={presenceTitleRef}>
              <h3 className={style.sectionTitle}>Подтвердите своё присутствие</h3>
              <div className={style.sectionIcon}><GrDocumentVerified /></div>
            </div>
            <div ref={presenceRef}>
              <Form />
            </div>
          </section>

          <div id="contacts"></div>

          <section className={style.section}>
            <div className={style.sectionContent} ref={contactsTitleRef}>
              <h3 className={style.sectionTitle}>Контакты</h3>
              <div className={style.sectionIcon}><IoIosContacts /></div>
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
