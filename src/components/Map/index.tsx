import style from './index.module.scss'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
interface MapProps {
  coordinates: [number, number],
  balloon: string
}



const MapComponent: React.FC<MapProps> = ({ coordinates, balloon }) => {

  return (
    <div className={style.map}>
      <YMaps
        query={{
          apikey: 'e5fbadfd-8732-41d7-84b8-04bd64adc323',
          lang: 'ru_RU',
          load: 'package.full',
        }}
        preload={true}
      >
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
      </YMaps>
    </div>

  )
};

export default MapComponent;