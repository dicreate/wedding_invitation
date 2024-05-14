import styles from "./index.module.scss"
import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';

interface IBurger {
   header: string;
   items: Item[];
}
interface Item {
   title: string;
   link: string;
}
const BurgerMenu = ({ header, items }: IBurger) => {
   const [opened, { toggle }] = useDisclosure();

   return (
      <>
         <div className={`${styles.burgerContainer} ${opened ? styles.burgerOpen : ''}`}>
            <Burger className={styles.burger} opened={opened} onClick={toggle} aria-label="Toggle navigation" size="lg" />
         </div>

         <div className={`${styles.menu} ${opened ? styles.open : ''}`}>
            <div className={styles.menuBlur} />
            <div className={styles.menuContent}>
               <div className={styles.menuHeader}>{header}</div>
               <ul className={styles.menuNavigation}>
                  {items.map((item, index) => (
                     <li className={styles.menuLink} key={index} onClick={toggle}>
                        <a href={item.link}>{item.title}</a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </>

   )
}

export default BurgerMenu