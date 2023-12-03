import { Main, Map, Schedule, Gallery, Questions } from "./components"
import style from "./app.module.scss"
import { DiDigitalOcean } from "react-icons/di";

import { GiLovers } from "react-icons/gi";
import { PiChurch } from "react-icons/pi";
import { FaUtensils } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { FaPersonCircleQuestion } from "react-icons/fa6";

function App() {
  
  return (
    <div className={style.appContainer} id="invited">
      <section>
        <Main
          text='Дима <svg width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="red"/>
          </svg> Карина <br /> 24.08.2024 <br /> Дорогие друзья и близкие!<br />Мы с невероятной радостью приглашаем вас разделить с нами наше счастье в этот замечательный день — день нашей свадьбы!<br />Ваше присутствие для нас чрезвычайно важно. Будем рады разделить с вами этот момент счастья и создать вместе незабываемые воспоминания.<br />Пожалуйста, дайте нам знать, будете ли вы с нами.'
          image="/image2.jpg"
        />
      </section>

      <section className={style.section} id="loveStory">
        <div className={style.sectionText}>
          <h3 className={style.sectionTitle}>Love Story</h3>
          <div className={style.sectionIcon}><GiLovers /></div>
        </div>
        <Gallery
          photos={[
            { id: 1, src: "/photos/1.jpg", preview: "/photos/preview/1.jpg", description: "photo 1" },
            { id: 2, src: "/photos/2.jpg", preview: "/photos/preview/2.jpg", description: "photo 2" },
            { id: 3, src: "/photos/3.jpg", preview: "/photos/preview/3.jpg", description: "photo 3" },
            { id: 4, src: "/photos/4.jpg", preview: "/photos/preview/4.jpg", description: "photo 4" },
            { id: 5, src: "/photos/5.jpg", preview: "/photos/preview/5.jpg", description: "photo 5" },
            { id: 6, src: "/photos/6.jpg", preview: "/photos/preview/6.jpg", description: "photo 6" },
            { id: 7, src: "/photos/7.jpg", preview: "/photos/preview/7.jpg", description: "photo 7" },
          ]} />
      </section>

      <section className={`${style.section} ${style.schedule}`} id="schedule">
        <div className={style.sectionText}>
          <h3 className={style.sectionTitle}>Программа свадебного дня</h3>
          <div className={style.sectionIcon}><GrSchedules /></div>
          <span className={style.scheduleDate}>24 августа 2024 г.</span>
          <Schedule />
        </div>
      </section>

      <section className={style.section} id="ceremonyMap">
        <div className={style.sectionText}>
          <h3 className={style.sectionTitle}>Венчание</h3>
          <div className={style.sectionIcon}><PiChurch /></div>
          <span>Костёл Воздвижения Креста Господня</span>
          <span className={style.address}>Лида, Советская ул.,2</span>
        </div>
        <Map coordinates={[53.889263, 25.303251]} balloon={"Лида, Советская ул.,2"} />
      </section>

      <section className={style.section} id="dinnerMap">
        <div className={style.sectionText}>
          <h3 className={style.sectionTitle}>Выездная регистрация и банкет</h3>
          <div className={style.sectionIcon}><FaUtensils /></div>
          <span>Усадьба "Барыш"</span>
          <span className={style.address}>Гродненская область, Вороновский район</span>
        </div>
        <Map coordinates={[53.964824, 25.124172]} balloon="Гродненская область, Вороновский район" />
      </section>

      <section className={style.section} id="questions">
        <div className={style.sectionText}>
          <h3 className={style.sectionTitle}>Отвечаем на ваши вопросы</h3>
          <div className={style.sectionIcon}><FaPersonCircleQuestion /></div>
          <Questions />
        </div>
      </section>

      <footer className={style.footer}>
        <div className={style.footerText}>Спасибо, что вы с нами !</div>
        <div className={style.footerIcon}><DiDigitalOcean /></div>
      </footer>
    </div>

  )
}

export default App
