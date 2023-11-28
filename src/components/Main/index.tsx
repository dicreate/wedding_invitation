import style from './index.module.scss'
import Navigation from './Navigation';
import { useEffect, useRef } from 'react';
interface MainProps {
  image: string;
  text: string;
}

const Main = ({
  image,
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
    <div className={style.main} style={{
      backgroundImage: `url(${image})`,
    }}>
      <div className={style.mainNavigation} ref={mainNavigationRef}>
        <Navigation />
      </div>
      <div className={style.mainBlur}>
        <div
          className={style.mainTransparent}
          style={{
            backgroundImage: `url(${image})`,
          }}>
          <div className={style.mainRight}>
            <div className={style.mainTextContainer}>
              <span className={style.mainText} dangerouslySetInnerHTML={{ __html: text }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Main;