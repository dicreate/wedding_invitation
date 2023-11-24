import { Photo, CommonClassProps } from "../types";
import style from './index.module.scss'
import cl from "classnames";
import React, { useRef, useMemo, useLayoutEffect, useState } from 'react';

interface MainPhotoProps extends CommonClassProps {
   photos: Photo[];
   indexActivePhoto: number;
}

type Reft = React.MutableRefObject<HTMLDivElement | null>;
const getPhotoByRef = (ref: Reft, index: number): HTMLElement | null =>
(
   ref.current!.querySelector(`img:nth-of-type(${index + 1})`)
)

const hidePhoto = (element :HTMLElement | null) => {
   if(!element) {
      return;
   }

   element.dataset.active = 'false';

   if (element.previousSibling instanceof HTMLElement) {
      (element.previousSibling as HTMLElement).dataset.active = 'false';     
   }

   if (element.nextSibling instanceof HTMLElement) {
      (element.nextSibling as HTMLElement).dataset.active = 'false';     
   }
}

const showPhoto = (element :HTMLElement | null) => {
   if(!element) {
      return;
   }

   element.dataset.active = 'true';

   if (element.previousSibling instanceof HTMLElement) {
      (element.previousSibling as HTMLElement).dataset.active = 'prepared';     
   }

   if (element.nextSibling instanceof HTMLElement) {
      (element.nextSibling as HTMLElement).dataset.active = 'prepared';     
   }

}

export const MainPhoto: React.FC<MainPhotoProps> = ({ photos, indexActivePhoto, className }) => {
   const [prevActiveIndexPhoto, setPrevActiveIndexPhoto] = useState(indexActivePhoto);
   const containerRef = useRef<HTMLDivElement | null>(null);

   useLayoutEffect(() => {
      if(!containerRef.current) {
         return;
      }

      const activePhoto = getPhotoByRef(
         containerRef,
         prevActiveIndexPhoto,
      );

      const nextActivePhoto = getPhotoByRef(
         containerRef,
         indexActivePhoto,
      );

      if (prevActiveIndexPhoto !== indexActivePhoto) {
         hidePhoto(activePhoto);
         showPhoto(nextActivePhoto);
      } else {
         showPhoto(activePhoto);
      }

      setPrevActiveIndexPhoto(indexActivePhoto);

   }, [indexActivePhoto, prevActiveIndexPhoto]);

   return useMemo(() => (
      <div
         className={cl(className, style.mainPhoto)}
         ref={containerRef}
      >
         {photos.map((photo, id) => (
            <img
               key={photo.id}
               className={style.mainPhotoImage}
               src={photo.src}
               alt={photo.description}
               loading="lazy"
               data-active={id === prevActiveIndexPhoto}
            />
         ))}
      </div>
   ), [className, prevActiveIndexPhoto, photos]);
};
