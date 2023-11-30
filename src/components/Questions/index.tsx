import React from "react"
import style from "./index.module.scss"

interface questionsItem {
   title: string;
   text: string;
}

const Questions: React.FC = () => {

   const items: questionsItem[] = [
      { title: 'Будет ли дресс-код ?', text: "Мы будем рады, если девушки выберут вечерние или коктейльные платья в пастельных тонах, а мужчины — костюм." },
      { title: 'Нужно ли дарить цветы ?', text: "Просим вас не дарить цветы, так как на следующий день мы улетаем в свадебное путешествие и не успеем насладиться красивыми букетами." },
   ]

   return (
      <div className={style.questions}>
         {
            items.map((item, index) => (
               <div className={style.content} key={index}>
                  <div className={style.contentTitle}>{item.title}</div>
                  <div className={style.contentText}>{item.text}</div>
               </div>
            ))
         }
      </div>
   )
}

export default Questions