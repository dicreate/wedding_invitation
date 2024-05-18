import style from "./index.module.scss"

interface ScheduleItem {
   title: string;
   place: string;
   time: string;
   address: string;
   coordinates: [number, number];
}

const Schedule = ({ handleSpanClick }: { handleSpanClick: (coordinates: [number, number], balloon: string) => void }) => {

   const items: ScheduleItem[] = [
      { title: "Венчание", place: "Костёл Милосердия Божьего", address: 'ул. Строителей, 66, Лида', time: "13:00", coordinates: [53.92178, 25.24656] },
      { title: "Выездная роспись", place: 'Усадьба "Барыш"', address: 'Гродненская область, Вороновский район', time: "16:30", coordinates: [53.964824, 25.124172] },
      { title: "Праздничный ужин", place: 'Усадьба "Барыш"', address: 'Гродненская область, Вороновский район', time: "18:00", coordinates: [53.964824, 25.124172] }
   ];

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
      </>

   )
}

export default Schedule

