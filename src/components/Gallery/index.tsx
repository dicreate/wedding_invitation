import { Photo } from "./types";
import style from './index.module.scss'
import React from 'react'
import { MainPhoto } from "./MainPhoto";
import { PreviewGallery } from "./PreviewGallery";
import { Navigation } from "./Navigation";

interface GalleryProps {
   photos: Photo[];
}

export const Gallery: React.FC<GalleryProps> = ({ photos }) => {

   const [indexActivePhoto, setIndexActivePhoto] = React.useState(0);
   /* const activePhoto = photos[indexActivePhoto]; */
   const prevPhoto = photos[indexActivePhoto - 1];
   const nextPhoto = photos[indexActivePhoto + 1];

   if(!photos.length) {
      return null;
   }

  
   return (
      <div className={style.gallery}>
         <div className={style.galleryWrapper}>
            <MainPhoto 
               photos={photos}
               indexActivePhoto={indexActivePhoto}
            />
            <Navigation
               className={style.galleryNavigation}
               disabledPrev={!prevPhoto}
               disabledNext={!nextPhoto}
               onPrevClick={() => {
                  setIndexActivePhoto(indexActivePhoto - 1);
               }}
               onNextClick={() => {
                  setIndexActivePhoto(indexActivePhoto + 1);
               }}
            />
         </div>
         <PreviewGallery 
            activePhotoIndex={indexActivePhoto}
            photos={photos}
            className={style.galleryPreviewList}
            setNewPhoto={setIndexActivePhoto}
         />
      </div>
   )
};
