import { useState } from "react"
import style from "./index.module.scss"
import Modal from "../Modal";
import Map from "../Map";

interface ScheduleItem {
   title: string;
   place: string;
   time: string;
   address: string;
   coordinates: [number, number];
}

const Schedule = () => {

   const items: ScheduleItem[] = [
      { title: "Венчание", place: "Костёл Воздвижения Креста Господня", address: 'Лида, Советская ул.,2', time: "11:00", coordinates: [53.889263, 25.303251] },
      { title: "Выездная роспись", place: 'Усадьба "Барыш"', address: 'Гродненская область, Вороновский район', time: "15:00", coordinates: [53.964824, 25.124172] },
      { title: "Праздничный ужин", place: 'Усадьба "Барыш"', address: 'Гродненская область, Вороновский район', time: "17:00", coordinates: [53.964824, 25.124172] }
   ];

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
            {items.map((item, index) => (
               <li key={index}>
                  <div className={style.time}>
                     <h3>{item.time}</h3>
                  </div>
                  <div className={style.details}>
                     <h3>{item.title}</h3>
                     <p>{item.place}</p>
                     <p className={style.address}>
                        <span onClick={() => handleSpanClick(item.coordinates, item.place)}>
                           {item.address}</span>
                     </p>
                  </div>
               </li>
            ))}
         </ul>
         <Modal active={modalActive} setActive={setModalActive}>
            <Map coordinates={mapCoordinates} balloon={mapBalloon} key={key} />
         </Modal>
      </>

   )
}

export default Schedule

