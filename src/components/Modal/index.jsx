import React, {useEffect} from 'react';

import {PortalModal} from './Portal'
import {Overlay, Dialog} from './styles'

export const Modal = ({children, open, onclose }) => {

  useEffect(() => {
    function onEsc(e){
      if (e.keyCode === 27) onclose();
    }
    window.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('keydown', onEsc);
    }
  } ,[onclose]);

  

  if (!open) return null;

  function onOverlayClick() {
    onclose();
  }

  function onDialogClick(e) {
    e.stopPropagation();
  }

  return (
    <PortalModal>
      <Overlay onClick={onOverlayClick}>
        <Dialog oncClick={onDialogClick}>{children}</Dialog>
      </Overlay>
  </PortalModal>
  )
}