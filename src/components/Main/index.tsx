import './index.scss';
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
            <div className={style.mainTransparentContainer}>
              <div className={style.mainTransparentText}>{text}</div>
            </div>
          </div>
      </div>
    </div>
  )
};

export default Main;