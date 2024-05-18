import styles from "./index.module.scss"
import BurgerMenu from "./BurgerMenu";

interface LinkItem {
   title: string;
   link: string;
}

const Navigation = () => {

   const links: LinkItem[] = [
      { title: "Приглашение", link: '#invited' },
      { title: "Love Story", link: '#loveStory' },
      { title: "Программа", link: '#schedule' },
      { title: "Венчание", link: '#ceremonyMap' },
      { title: "Банкет", link: '#dinnerMap' },
      { title: "Вопросы", link: '#questions' },
      { title: "Подтверждение", link: '#presence' },
      { title: "Контакты", link: '#contacts' },
   ];

   return (
      <>
         <div className={styles.navigationContainer}>
            <ul className={styles.navigation}>
               {links.map((item, index) => (
                  <li key={index}>
                     <a href={item.link}>{item.title}</a>
                  </li>
               ))}
            </ul>
         </div>
         <BurgerMenu header={"Навигация"} items={links} />
      </>

   )
}

export default Navigation