import React, { ReactNode } from "react"
import style from "./index.module.scss"
import QuestionsForm from "./QuestionsForm";
interface questionsItem {
   title: string;
   text: string | ReactNode;
   colors?: string[]
}

const Questions: React.FC = () => {

   const questions: questionsItem[] = [
      {
         title: 'Будет ли дресс-код ?',
         text: <div className={style.textContainer}>
            <p>Нам было бы чрезвычайно приятно, если бы наши гости внесли свою частичку в создание волшебной атмосферы нашего торжества, отдав предпочтение нарядам в деликатных пастельных оттенках.</p>
            <p>Мы будем рады, если подружки невесты выберут наряды небесно-голубого цвета.</p>
            <p>Что касается мужчин, то наш взгляд упал на безупречность костюма – будь то элегантное сочетание рубашки и пиджака или же костюм, дополненный лишь рубашкой.</p>
            <p>Благодарим вас за желание принять участие в создании великолепного вида нашего торжества!</p>
         </div>,
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
                              {/*                               <p className={style.contentText}>Мы стараемся сделать праздник красивым и будем рады, если вы поддержите цветовую гамму нашей свадьбы.</p> */}
                              <h3 className={style.contentText} style={{ fontStyle: "italic" }}>Примеры постельных тонов:</h3>
                              <div className={style.colorsContainer}>
                                 {item.colors.map((color, index) => (
                                    <div className={style.color} style={{ backgroundColor: color, width: 60, height: 60, borderRadius: 100 }} key={index}>
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
         <div className={style.content}>
            <div className={style.contentTitle}>Остались вопросы ?</div>
            <div className={style.contentText}>Задайте свой вопрос прямо здесь или лично нам</div>
            <QuestionsForm />
         </div>

      </div >
   )
}

export default Questions