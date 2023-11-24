import {useRef , useEffect, useMemo} from "react";
import { Photo, CommonClassProps } from "../types";
import cl from "classnames"
import style from './index.module.scss'
interface PreviewGalleryProps extends CommonClassProps {
   activePhotoIndex: number;
   photos: Photo[];
   setNewPhoto: (id: number) => void;
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({ activePhotoIndex, photos, className, setNewPhoto }) => {
   const previewContainer = useRef<HTMLUListElement>(null);

   useEffect(() => {
      if(!previewContainer.current) {
         return;
      }
      previewContainer.current.style.transform = `translate3d(-${activePhotoIndex*164}px, 0, 0)`
   }, [activePhotoIndex])

   return (
      <div className={cl(style.previewGallery, className)}>
         {useMemo(() => (
             <ul
             className={style.previewGalleryTrack}
             ref={previewContainer}
          >
             {
                photos.map((photo, id) => (
                   <li
                      key={photo.id}
                   >
                     <button
                         className={style.previewGalleryPreview}
                         onClick={() => setNewPhoto(id)}
                     >
                        <img
                           src={photo.preview}
                           alt={photo.description}
                           className={style.previewGalleryImage} 
                        />
                     </button>
                   </li>
                ))
             }
          </ul>
         ),[photos, setNewPhoto])
         }
         <div className={style.previewGalleryCover}>
            {activePhotoIndex + 1} / {photos.length}
         </div>
      </div>
   );
};
