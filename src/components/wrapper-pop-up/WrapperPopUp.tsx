/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import style from './style.module.scss';

interface WrapperPopUpProps {
  id?: string;
  openPopUp: boolean;
  setOpenPopUp: (value: boolean) => void;
  children: React.ReactNode;
}

function WrapperPopUp({
  id = '',
  openPopUp,
  setOpenPopUp,
  children,
}: WrapperPopUpProps) {
  const burgerMenu = openPopUp
    ? `${style.wrapperPopUp} ${style.burgerMenuActive}`
    : `${style.wrapperPopUp} ${style.burgerMenu}`;

  const cart = openPopUp
    ? `${style.wrapperPopUp} ${style.cartActive}`
    : `${style.wrapperPopUp} ${style.cart}`;

  return (
    <div className={id === 'cart' ? cart : burgerMenu}>
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
