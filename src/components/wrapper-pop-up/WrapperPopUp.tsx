/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import style from './style.module.scss';

interface WrapperPopUpProps {
  openPopUp: boolean;
  setOpenPopUp: (value: boolean) => void;
  children: React.ReactNode;
}

function WrapperPopUp({
  openPopUp,
  setOpenPopUp,
  children,
}: WrapperPopUpProps) {
  return (
    <div
      className={
        openPopUp
          ? `${style.wrapperPopUp} ${style.popUpActive}`
          : style.wrapperPopUp
      }
    >
      <div
        className={style.closeButton}
        onClick={() => setOpenPopUp(!openPopUp)}
      >
        Х
      </div>
      {children}
    </div>
  );
}

export default WrapperPopUp;
