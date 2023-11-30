import { useState } from "react"
import style from "./index.module.scss"
import Modal from "./Modal";

export const Schedule = () => {

   const [modalActive, setModalActive] = useState<boolean>(false);

   return (
      <>
         <ul className={style.schedule}>
            <li>
               <div className={style.time}>
                  <h3>09:00</h3>
               </div>
               <div className={style.details}>
                  <h3>Утро невесты</h3>

                  <p>Фотосессия в отеле Radisson Collection Hotel</p>
                  <p className={style.address}>
                     <span onClick={() => setModalActive(true)}>
                        Россия, Москва, Певческий переулок, 4с</span>
                  </p>
               </div>
            </li>
            <li>
               <div className={style.time}>
                  <h3>09:00</h3>
               </div>
               <div className={style.details}>
                  <h3>Утро невесты</h3>

                  <p>Фотосессия в отеле Radisson Collection Hotel</p>
                  <p className={style.address}>
                     <span>
                        Россия, Москва, Певческий переулок, 4с</span>
                  </p>
               </div>
            </li>
            <li>
               <div className={style.time}>
                  <h3>09:00</h3>
               </div>
               <div className={style.details}>
                  <h3>Утро невесты</h3>

                  <p>Фотосессия в отеле Radisson Collection Hotel</p>
                  <p className={style.address}>
                     <span>
                        Россия, Москва, Певческий переулок, 4с</span>
                  </p>
               </div>
            </li>
         </ul>
         <Modal active={modalActive} setActive={setModalActive}>
         </Modal>
      </>

   )
}

