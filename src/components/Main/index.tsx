import './index.scss';

interface MainProps {
  image: string;
  text: string;
}

const Main = ({
  image,
  text
}: MainProps) => {
  return (
    <div className="coverCard" style={{
      backgroundImage: `url(${image})`,
    }}>
      <h2 className="coverCard__title">
        <div
          className="coverCard__title_transparent"
          style={{
            backgroundImage: `url(${image})`,
          }}>
            <div className='testDiv'>
              <div>{text}</div>
            </div>
          </div>
      </h2>
    </div>
  )
};

export default Main;