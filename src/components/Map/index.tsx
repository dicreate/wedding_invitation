import style from './index.module.scss'
import { Map, Placemark, TypeSelector, TrafficControl, RouteButton, GeolocationControl } from '@pbe/react-yandex-maps';
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
        {/*@ts-expect-error type error from  @pbe/react-yandex-maps*/}
        <TypeSelector options={{ float: "right" }} />
        {/*@ts-expect-error type error from  @pbe/react-yandex-maps*/}
        <TrafficControl options={{ float: "right" }} />
        <RouteButton options={{ float: "right" }} />
        <GeolocationControl options={{ float: "left" }} />
      </Map>
    </div>
  )
};

export default MapComponent;