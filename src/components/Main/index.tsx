import style from './index.module.scss'
import Navigation from './Navigation';
import { ReactNode, useEffect, useRef } from 'react';
interface MainProps {
  text: ReactNode;
}

const Main = ({
  text
}: MainProps) => {

  const mainNavigationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      if (mainNavigationRef.current) {
        if (scrollY > window.innerHeight) {
          mainNavigationRef.current.classList.add(style.scrolled);
        } else {
          mainNavigationRef.current.classList.remove(style.scrolled);
        }
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={style.main}>
      <div className={style.mainNavigation} ref={mainNavigationRef}>
        <Navigation />
      </div>
      <div className={style.mainBlur}>
        <div
          className={style.mainTransparent}
        >
          <div className={style.mainRight}>
            {text}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Main;