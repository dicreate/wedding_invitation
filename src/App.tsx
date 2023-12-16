import { Main, Map, Schedule, Gallery, Questions, Timer } from "./components"
import style from "./app.module.scss"
import { DiDigitalOcean } from "react-icons/di";

import { GiLovers, GiGloves } from "react-icons/gi";
import { IoHeartSharp } from "react-icons/io5";
import { PiChurch } from "react-icons/pi";
import { FaUtensils } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import { FaPersonCircleQuestion } from "react-icons/fa6";

function App() {

  return (
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
          <h3 className={style.sectionTitle}>Дима & Карина</h3>
          <div className={style.sectionIcon}><GiLovers /></div>
          <div className={style.invitation}>
            <p>Дорогие друзья и близкие!</p>
            <p>Мы с невероятной радостью приглашаем вас разделить с нами наше счастье в этот замечательный день — день нашей свадьбы!</p>
            <p>Ваше присутствие для нас чрезвычайно важно. Будем рады разделить с вами этот момент счастья и создать вместе незабываемые воспоминания.</p>
            <p>Пожалуйста, дайте нам знать, будете ли вы с нами.</p>
            <div className={style.invitationPhotos}>
              <div>
                <img src="./me.webp" alt="me" />
              </div>
              <div>
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
          <h3 className={style.sectionTitle}>Love Story</h3>
          <div className={style.sectionIcon}><GiGloves /></div>
        </div>
        <Gallery
          photos={[
            { id: 1, src: "./photos/1.jpg", preview: "./photos/preview/1.jpg", description: "photo 1" },
            { id: 2, src: "./photos/2.jpg", preview: "./photos/preview/2.jpg", description: "photo 2" },
            { id: 3, src: "./photos/3.jpg", preview: "./photos/preview/3.jpg", description: "photo 3" },
            { id: 4, src: "./photos/4.jpg", preview: "./photos/preview/4.jpg", description: "photo 4" },
            { id: 5, src: "./photos/5.jpg", preview: "./photos/preview/5.jpg", description: "photo 5" },
            { id: 6, src: "./photos/6.jpg", preview: "./photos/preview/6.jpg", description: "photo 6" },
            { id: 7, src: "./photos/7.jpg", preview: "./photos/preview/7.jpg", description: "photo 7" },
          ]} />
      </section>

      <div id="schedule"></div>

      <section className={`${style.section} ${style.schedule}`}>
        <div className={style.sectionContent}>
          <h3 className={style.sectionTitle}>Программа свадебного дня</h3>
          <div className={style.sectionIcon}><GrSchedules /></div>
          <span className={style.scheduleDate}>24 августа 2024 г.</span>
          <Schedule />
        </div>
      </section>

      <div id="ceremonyMap"></div>

      <section className={style.section} >
        <div className={style.sectionContent}>
          <h3 className={style.sectionTitle}>Венчание</h3>
          <div className={style.sectionIcon}><PiChurch /></div>
          <span>Костёл Воздвижения Креста Господня</span>
          <span className={style.address}>Лида, Советская ул.,2</span>
        </div>
        <Map coordinates={[53.889263, 25.303251]} balloon={"Лида, Советская ул.,2"} />
      </section>

      <div id="dinnerMap"></div>

      <section className={style.section}>
        <div className={style.sectionContent}>
          <h3 className={style.sectionTitle}>Выездная регистрация и банкет</h3>
          <div className={style.sectionIcon}><FaUtensils /></div>
          <span>Усадьба "Барыш"</span>
          <span className={style.address}>Гродненская область, Вороновский район</span>
        </div>
        <Map coordinates={[53.964824, 25.124172]} balloon="Гродненская область, Вороновский район" />
      </section>

      <div id="questions"></div>

      <section className={style.section}>
        <div className={style.sectionContent}>
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
