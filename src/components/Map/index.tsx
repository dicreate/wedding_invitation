import style from './index.module.scss'
import { YMaps, Map, Placemark, GeolocationControl, TrafficControl, TypeSelector, RouteButton } from '@pbe/react-yandex-maps';

interface MapProps {
  coordinates: [number, number],
  balloon: string
}

const MapComponent: React.FC<MapProps> = ({ coordinates, balloon }) => {
  return (
    <div className={style.map}>
      <YMaps>
        <Map
          width="80vw"
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
          {/* @ts-expect-error Всё согласно документации*/}
          <TrafficControl options={{ float: 'right' }} />
          {/* @ts-expect-error Всё согласно документации*/}
          <TypeSelector options={{ float: 'right' }} />
          <GeolocationControl options={{ float: "left" }} />
          <RouteButton options={{ float: "right" }} />
        </Map>
      </YMaps>
    </div>

  )
};

export default MapComponent;