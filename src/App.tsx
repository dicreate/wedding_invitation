import Main from "./components/Main"
import { Gallery } from "./components/Gallery"
import style from "./app.module.scss"
import { GiLovers } from "react-icons/gi";
import { PiChurch } from "react-icons/pi";
import { FaUtensils } from "react-icons/fa";
import { GrSchedules } from "react-icons/gr";
import Map from "./components/Map";

function App() {
  return (
    <div className={style.appContainer} id="invited">
      <section>
        <Main
          text="Дима & Карина <br /> 24.08.2024 <br /> Дорогие друзья и близкие!<br />Мы с невероятной радостью приглашаем вас разделить с нами наше счастье в этот замечательный день — день нашей свадьбы!<br />Ваше присутствие для нас чрезвычайно важно. Будем рады разделить с вами этот момент счастья и создать вместе незабываемые воспоминания.<br />Пожалуйста, дайте нам знать, будете ли вы с нами."
          image="/image.jpg"
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
      <section className={style.section} id="schedule">
        <div className={style.sectionText}>
          <h3 className={style.sectionTitle}>Программа свадебного дня</h3>
          <div className={style.sectionIcon}><GrSchedules /></div>
          <span>24 августа 2024 г.</span>
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
    </div>

  )
}

export default App
