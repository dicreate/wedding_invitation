import { useState } from "react"
import style from "./index.module.scss"
import Modal from "../Modal";
import Map from "../Map";

export const Schedule = () => {

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

   return (
      <>
         <ul className={style.schedule}>
            <li>
               <div className={style.time}>
                  <h3>09:00</h3>
               </div>
               <div className={style.details}>
                  <h3>Венчание</h3>

                  <p>Костёл Воздвижения Креста Господня</p>
                  <p className={style.address}>
                     <span onClick={() => handleSpanClick([53.889263, 25.303251], "Лида, Советская ул.,2")}>
                        Лида, Советская ул.,2</span>
                  </p>
               </div>
            </li>
            <li>
               <div className={style.time}>
                  <h3>13:00</h3>
               </div>
               <div className={style.details}>
                  <h3>Выездная роспись</h3>

                  <p>Усадьба "Барыш"</p>
                  <p className={style.address}>
                     <span onClick={() => handleSpanClick([53.964824, 25.124172], "Гродненская область, Вороновский район")}>
                        Гродненская область, Вороновский район
                     </span>
                  </p>
               </div>
            </li>
            <li>
               <div className={style.time}>
                  <h3>18:00</h3>
               </div>
               <div className={style.details}>
                  <h3>Праздничный ужин</h3>

                  <p>Усадьба "Барыш"</p>
                  <p className={style.address}>
                     <span onClick={() => handleSpanClick([53.964824, 25.124172], "Гродненская область, Вороновский район")}>
                        Гродненская область, Вороновский район
                     </span>
                  </p>
               </div>
            </li>
         </ul>
         <Modal active={modalActive} setActive={setModalActive}>
            <Map coordinates={mapCoordinates} balloon={mapBalloon} key={key} />
         </Modal>
      </>

   )
}

