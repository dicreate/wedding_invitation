import { Dispatch, SetStateAction, ReactNode } from "react"
import style from "./index.module.scss"

interface ModalProps {
   active: boolean,
   setActive: Dispatch<SetStateAction<boolean>>,
   children?: ReactNode,
}

const Modal: React.FC<ModalProps> = ({ active, setActive, children }) => {
   return (
      <div className={active ? `${style.modal} ${style.active}` : style.modal} onClick={() => setActive(false)}>
         <div className={active ? `${style.modalContent} ${style.active}` : style.modalContent} onClick={(e) => e.stopPropagation()}>
            {children}
         </div>
      </div>
   )
}

export default Modal