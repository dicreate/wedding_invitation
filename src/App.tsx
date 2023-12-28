import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Main, Map, Schedule, Gallery, Questions, Timer } from "./components"
import style from "./app.module.scss"

import { YMaps } from "@pbe/react-yandex-maps";
import { GiLovers, GiGloves } from "react-icons/gi";
import { IoHeartSharp, IoFlowerSharp } from "react-icons/io5";
import { PiChurch } from "react-icons/pi";
import { FaUtensils } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { FaPersonCircleQuestion } from "react-icons/fa6";


function App() {
  gsap.registerPlugin(ScrollTrigger);

  const invitationRef = useRef(null);
  const scheduleRef = useRef(null);
  const questionsRef = useRef(null);
  const galleryRef = useRef(null);
  const heartRef = useRef(null);
  const nuptialsRef = useRef(null);
  const weddingRef = useRef(null);
  const invitationTitleRef = useRef(null);
  const galleryTitleRef = useRef(null);
  const scheduleTitleRef = useRef(null);
  const nuptialsTitleRef = useRef(null);
  const weddingTitleRef = useRef(null);
  const questionsTitleRef = useRef(null);

  useLayoutEffect(() => {
    /*  const tl = gsap.timeline({
       scrollTrigger: {
         trigger: invitationRef.current,
         markers: true,
         start: 'top 80%',
         end: 'bottom 20%',
         toggleActions: 'play none none reverse',
       }

          tl.from(questionsRef.current, {
          opacity: 0,
          x: -100,
          duration: 2,
        })
        
     }) */

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
  });

  return (
    <YMaps
      query={{
        apikey: 'e5fbadfd-8732-41d7-84b8-04bd64adc323',
        lang: 'ru_RU',
        load: 'package.full',
      }}
      preload={true}
    >
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
              <p>Дорогие друзья и близкие!</p>
              <p>Мы с невероятной радостью приглашаем вас разделить с нами наше счастье в этот замечательный день — день нашей свадьбы!</p>
              <p>Ваше присутствие для нас чрезвычайно важно. Будем рады разделить с вами этот момент счастья и создать вместе незабываемые воспоминания.</p>
              <p>Пожалуйста, дайте нам знать, будете ли вы с нами.</p>
              <div className={style.invitationPhotos}>
                <div>
                  <img src="./me.webp" alt="me" />
                </div>
                <div ref={heartRef}>
                  <IoHeartSharp className={style.invitationPhotosIcon} />
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
            <div ref={scheduleRef} style={{marginTop: '50px'}}>
              <span className={style.scheduleDate}>24 августа 2024 г.</span>
              <Schedule />
            </div>
          </div>
        </section>

        <div id="ceremonyMap"></div>

        <section className={style.section} >
          <div className={style.sectionContent} ref={nuptialsTitleRef}>
            <h3 className={style.sectionTitle}>Венчание</h3>
            <div className={style.sectionIcon}><PiChurch /></div>
            <span>Костёл Воздвижения Креста Господня</span>
            <span className={style.address}>Лида, Советская ул.,2</span>
          </div>
          <div ref={nuptialsRef}>
            <Map coordinates={[53.889263, 25.303251]} balloon={"Лида, Советская ул.,2"} />
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
          <div className={style.sectionContent}>
            <div ref={questionsTitleRef}>
              <h3 className={style.sectionTitle}>Отвечаем на ваши вопросы</h3>
              <div className={style.sectionIcon}><FaPersonCircleQuestion /></div>
            </div>       
            <div ref={questionsRef}>
              <Questions />
            </div>
          </div>
        </section>

        <footer className={style.footer}>
          <div className={style.footerText}>Будем рады видеть вас на нашей свадьбе !</div>
          <div className={style.footerIcon}><IoFlowerSharp /></div>
          <div className={style.footerLink}>Здесь будет ссылка на свадебные фотографии после свадьбы</div>
          <div></div>
        </footer>
      </div>
    </YMaps>
  )
}

export default App
