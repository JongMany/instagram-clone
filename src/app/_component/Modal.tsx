import React, {ReactNode} from 'react';
import {createPortal} from "react-dom";

import style from './modal.module.css';

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}
const Modal = ({open, onClose, children}: Props) => {
  if (!open) return null;

  return (
      createPortal(<>
        <div className={style.overlayStyle} onClick={onClose}/>
        <div className={style.modal}>
          {children}
        </div>
      </>, document.getElementById('portal')!)
  );
};

export default Modal;