import style from './index.module.scss'
import { Map, Placemark } from '@pbe/react-yandex-maps';
interface MapProps {
  coordinates: [number, number],
  balloon: string
}

const MapComponent: React.FC<MapProps> = ({ coordinates, balloon }) => {

  return (
    <div className={style.map}>
      <Map
        width="100vw"
        height="60vh"
        defaultState={{
          center: coordinates,
          zoom: 15,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
      >
        <Placemark
          modules={["geoObject.addon.balloon"]}
          defaultGeometry={coordinates}
          properties={{
            balloonContentBody:
              balloon,
          }}
        />
      </Map>
    </div>

  )
};

export default MapComponent;