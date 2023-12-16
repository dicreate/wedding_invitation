import { useState, useRef, useEffect } from "react";
import style from './index.module.scss'

const Timer = () => {
   const [timerDays, setTimerDays] = useState<string>('00');
   const [timerHours, setTimerHours] = useState<string>('00');
   const [timerMinutes, setTimerMinutes] = useState<string>('00');
   const [timerSeconds, setTimerSeconds] = useState<string>('00');

   let interval = useRef();

   const startTimer = () => {
      const countdownDate = new Date('May 30, 2024 00:00:00').getTime();

      interval = setInterval(() => {
         const now = new Date().getTime();
         const distance = countdownDate - now;
         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
         const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

         if (distance < 0) {
            //stop timer
            clearInterval(interval.current);
         } else {
            // update timer
            setTimerDays(String(days));
            setTimerHours(String(hours));
            setTimerMinutes(String(minutes));
            setTimerSeconds(String(seconds));
         }
      }, 1000)
   };

   useEffect(() => {
      startTimer();
      return () => {
         clearInterval(interval.current);
      }
   }, [])

   return (
      <div className={style.timer}>
         <div>
            <p>{timerDays}</p>
            <p><small>Дней</small></p>
         </div>
         <span>:</span>
         <div>
            <p>{timerHours}</p>
            <p><small>Часов</small></p>
         </div>
         <span>:</span>
         <div>
            <p>{timerMinutes}</p>
            <p><small>Минут</small></p>
         </div>
         <span>:</span>
         <div>
            <p>{timerSeconds}</p>
            <p><small>Секунд</small></p>
         </div>
      </div>
   )
}

export default Timer