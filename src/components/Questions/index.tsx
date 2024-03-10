import React from "react"
import style from "./index.module.scss"

interface questionsItem {
   title: string;
   text: string;
   colors?: string[]
}

const Questions: React.FC = () => {

   const questions: questionsItem[] = [
      {
         title: 'Будет ли дресс-код ?',
         text: "Мы будем рады, если девушки выберут наряды в постельных тонах (подружки невесты небесно-голубого цвета), а мужчины — костюм или рубашка.",
         colors: ['#e1bfcd', '#eedbdd', '#f4d2c8', '#fae2ca', '#f6d8b6', '#efdfc8', '#f4e1b6', '#efdca2', '#f7f2c8', '#f2f1c1', '#e0e7d7', '#ecf3d2', '#cbe9c3', '#dfe9e1', '#dceef0', '#dae6f4', '#d1d7ef', '#e4d1e7']
      },
      {
         title: 'Кричать ли Горько ?',
         text: 'Будем благодарны, если вы воздержитесь от криков «Горько!» на празднике. Для нас поцелуй - знак выражения чувств, он не может быть по заказу.'
      }
   ]

   return (
      <div className={style.questions}>
         {
            questions.map((item, index) => (
               <div className={style.content} key={index}>
                  <div className={style.contentTitle}>{item.title}</div>
                  <div className={style.contentText}>{item.text}</div>
                  {
                     item.colors
                        ? (
                           <>
                              <div className={style.contentText}>Мы старались сделать праздник красивым и будем рады, если вы поддержите цветовую гамму нашей свадьбы.</div>
                              <h3 className={style.contentText}>Примеры постельных тонов:</h3>
                              <div className={style.colorsContainer}>
                                 {item.colors.map((color, index) => (
                                    <div style={{ backgroundColor: color, width: 60, height: 60, borderRadius: 100 }} key={index}>
                                    </div>
                                 ))}
                              </div>

                           </>

                        )
                        : null
                  }
               </div>
            ))
         }
      </div >
   )
}

export default Questions