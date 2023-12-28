import style from './index.module.scss'
import gsap from 'gsap';
import Navigation from './Navigation';
import { ReactNode, useEffect, useRef, useLayoutEffect } from 'react';
interface MainProps {
  text: ReactNode;
}

const Main = ({
  text
}: MainProps) => {

  const mainRef = useRef(null);

  useLayoutEffect(() => {
    /*  const tl = gsap.timeline({
       scrollTrigger: {
         trigger: invitationRef.current,
         markers: true,
         start: 'top 80%',
         end: 'bottom 20%',
         toggleActions: 'play none none reverse',
       }

          tl.from(questionsRef.current, {
          opacity: 0,
          x: -100,
          duration: 2,
        })
        
     }) */

    gsap.from(mainRef.current, {
      opacity: 0,
      x: 400,
      duration: 1.5,
      scrollTrigger: {
        trigger: mainRef.current,
        toggleActions: 'play none none reverse',
      }
    })

    gsap.from(mainNavigationRef.current, {
      opacity: 0,
      y: -100,
      duration: 1,
      scrollTrigger: {
        trigger: mainNavigationRef.current,
        toggleActions: 'play none none reverse',
      }
    })
  });

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