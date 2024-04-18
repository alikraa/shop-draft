/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import WrapperPopUp from '../wrapper-pop-up/WrapperPopUp';
import CartForm from './CartForm';
import CartItem from './CartItem';
import cartIcon from '../../images/icons/cart-icon.svg';
import style from './style.module.scss';

function Cart() {
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  return (
    <div className={style.cart}>
      <WrapperPopUp id="cart" openPopUp={openPopUp} setOpenPopUp={setOpenPopUp}>
          <div className={style.cartOrder}>
            <h3>Ваш заказ</h3>
            <hr />

            <CartItem />
            <CartItem />
            <CartItem />

            <hr />
            <p className={style.totalSum}>Сумма: 999 р.</p>
          </div>

          <CartForm />
      </WrapperPopUp>

      <div
        className={style.cartButton}
        onClick={() => setOpenPopUp(!openPopUp)}
      >
        <img
          src={cartIcon}
          className={style.cartIcon}
          alt="Cart"
          title="Корзина"
        />
        <span className={style.cartNumberProducts}>3</span>
      </div>
    </div>
  );
}

export default Cart;
