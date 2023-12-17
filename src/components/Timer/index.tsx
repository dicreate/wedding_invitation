import { useState, useEffect } from "react";
import style from './index.module.scss'

const Timer = () => {
   const [timerDays, setTimerDays] = useState<string>('00');
   const [timerHours, setTimerHours] = useState<string>('00');
   const [timerMinutes, setTimerMinutes] = useState<string>('00');
   const [timerSeconds, setTimerSeconds] = useState<string>('00');

   useEffect(() => {
      const startTimer = () => {
         const countdownDate = new Date('August 24, 2024 00:00:00').getTime();

         const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
               // Stop timer
               clearInterval(interval);
            } else {
               // Update timer
               setTimerDays(String(days));
               setTimerHours(String(hours));
               setTimerMinutes(String(minutes));
               setTimerSeconds(String(seconds));
            }
         }, 1000);

         return () => clearInterval(interval); // Clear interval when the component unmounts
      };

      const cleanupInterval = startTimer(); // Start the timer and store the returned interval ID for cleanup

      return () => cleanupInterval(); // Return the cleanup function
   }, []);

   return (
      <div className={style.container}>
         <div className={style.timer}>
            <div>
               <p>{timerDays}</p>
               <p>Дней</p>
            </div>
            <span>:</span>
            <div>
               <p>{timerHours}</p>
               <p>Часов</p>
            </div>
            <span>:</span>
            <div>
               <p>{timerMinutes}</p>
               <p>Минут</p>
            </div>
            <span>:</span>
            <div>
               <p>{timerSeconds}</p>
               <p>Секунд</p>
            </div>
         </div>
      </div>

   )
}

export default Timer