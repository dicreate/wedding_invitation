import style from './index.module.scss'
import gsap from 'gsap';
import Navigation from './Navigation';
import { ReactNode, useRef, useLayoutEffect } from 'react';
interface MainProps {
  text: ReactNode;
}

const Main = ({
  text
}: MainProps) => {

  const mainRef = useRef(null);

  useLayoutEffect(() => {

    gsap.from(mainRef.current, {
      opacity: 0,
      x: 400,
      duration: 1.5,
      scrollTrigger: {
        trigger: mainRef.current,
        toggleActions: 'play none none reverse',
      }
    })
  });

  /*   const mainNavigationRef = useRef<HTMLDivElement | null>(null);
  
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
    }, []); */

  return (
    <div className={style.main}>
      <Navigation />
      <div className={style.mainBlur} ref={mainRef}>
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