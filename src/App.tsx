import Main from "./components/Main"
import { Gallery } from "./components/Gallery"
import style from "./app.module.scss"
import { GiLovers } from "react-icons/gi";
import Map from "./components/Map";

function App() {
  return (
    <div className={style.appContainer}>
     <section>
      <Main
        text="Дорогие друзья и близкие!<br />Мы с невероятной радостью приглашаем вас разделить с нами наше счастье в этот замечательный день — день нашей свадьбы!<br />Ваше присутствие для нас чрезвычайно важно. Будем рады разделить с вами этот момент счастья и создать вместе незабываемые воспоминания.<br />Пожалуйста, дайте нам знать, будете ли вы с нами.<br />С любовью и благодарностью,<br />Дима и Карина "
        image="/image.jpg"
      />
     </section>
      <section className={style.gallery}>
        <h3 className={style.title}>Love Story <GiLovers /></h3>
        <Gallery 
          photos={[
          {id: 1, src: "/photos/1.jpg", preview: "/photos/preview/1.jpg", description: "photo 1"},
          {id: 2, src: "/photos/2.jpg", preview: "/photos/preview/2.jpg", description: "photo 2"},
          {id: 3, src: "/photos/3.jpg", preview: "/photos/preview/3.jpg", description: "photo 3"},
          {id: 4, src: "/photos/4.jpg", preview: "/photos/preview/4.jpg", description: "photo 4"},
          {id: 5, src: "/photos/5.jpg", preview: "/photos/preview/5.jpg", description: "photo 5"},
          {id: 6, src: "/photos/6.jpg", preview: "/photos/preview/6.jpg", description: "photo 6"},
          {id: 7, src: "/photos/7.jpg", preview: "/photos/preview/7.jpg", description: "photo 7"},
          ]} />
     </section>
     <section className={style.ceremonyMap}>
      <h3 className={style.title}>Венчание</h3>
      <Map coordinates={[53.889263, 25.303251]}/>
     </section>
     <section className={style.dinnerMap}>
      <h3 className={style.title}>Выездная регистрация и банкет</h3>
      <Map coordinates={[53.964824, 25.124172]}/>
     </section>
    </div>
   
  )
}

export default App
