import style from "./index.module.scss"
import { FaTelegram, FaViber, FaInstagramSquare, } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";
const Contacts = () => {
   return (
      <div className={style.container}>
         <div className={style.contact}>
            <div className={style.contact_photo}>
               <img src="./me.webp" alt="me" />
            </div>
            <div className={style.contact_info}>
               <div className={style.contact_info__name}>
                  Дима
               </div>
               <a href="tel:+375295143602">
                  +375 (29) 514-36-02
               </a>
               <div className={style.contact_info__socials}>
                  <div style={{ color: '#0088cc' }}>
                     <a href="https://t.me/createdi" target="_blank"><FaTelegram /></a>
                  </div>
                  <div style={{ color: '#7360F2' }}>
                     <a href="viber://chat?number=%2B375295143602" target="_blank"><FaViber /></a>
                  </div>
                  <div style={{ color: '#c32aa3' }}>
                     <a href="https://www.instagram.com/_di_may" target="_blank"><FaInstagramSquare /></a>
                  </div>
                  <div style={{ color: '#4a76a8' }}>
                     <a href="https://vk.com/di__may" target="_blank"><FaVk /></a>
                  </div>
               </div>
            </div>
         </div>
         <div className={style.contact}>
            <div className={style.contact_photo}>
               <img src="./she.webp" alt="me" />
            </div>
            <div className={style.contact_info}>
               <div className={style.contact_info__name}>
                  Карина
               </div>
               <a href="tel:+375298878221">
                  +375 (29) 887-82-21
               </a>
               <div className={style.contact_info__socials}>
                  <div style={{ color: '#0088cc' }}>
                     <a href="https://t.me/drkarinakuzmich" target="_blank"><FaTelegram /></a>
                  </div>
                  <div style={{ color: '#7360F2' }}>
                     <a href="viber://chat?number=%2B375298878221" target="_blank"><FaViber /></a>
                  </div>
                  <div style={{ color: '#c32aa3' }}>
                     <a href="https://instagram.com/dr.karinakuzmich" target="_blank"><FaInstagramSquare /></a>
                  </div>
                  <div style={{ color: '#4a76a8' }}>
                     <a href="https://vk.com/karinochkakuzmich" target="_blank"><FaVk /></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contacts