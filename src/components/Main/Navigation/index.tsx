import styles from "./index.module.scss"

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
      { title: "F.A.Q", link: '#questions' },
      { title: "Подтверждение", link: '#presence' },
   ];

   return (
      <ul className={styles.navigation}>
         {links.map((item, index) => (
            <li key={index}>
               <a href={item.link}>{item.title}</a>
            </li>
         ))}
      </ul>
   )
}

export default Navigation