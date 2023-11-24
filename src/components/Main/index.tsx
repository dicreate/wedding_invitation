import style from './index.module.scss'
interface MainProps {
  image: string;
  text: string;
}

const Main = ({
  image,
  text
}: MainProps) => {
  return (
    <div className={style.main} style={{
      backgroundImage: `url(${image})`,
    }}>
      <div className={style.mainBlur}>
        <div
          className={style.mainTransparent}
          style={{
            backgroundImage: `url(${image})`,
          }}>
            <div className={style.mainRight}>
              <div className={style.mainTextContainer}>
                <span className={style.mainText} dangerouslySetInnerHTML={{__html: text}} />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
};

export default Main;