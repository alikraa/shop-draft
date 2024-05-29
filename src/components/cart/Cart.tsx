/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import WrapperPopUp from '../wrapper-pop-up/WrapperPopUp';
import CartForm from './CartForm';
import CartItem from './CartItem';
import { arrayOfProducts } from '../../ts/view';
import cartIcon from '../../images/icons/cart-icon.svg';
import style from './style.module.scss';

function Cart() {
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);

  const totalSum = arrayOfProducts.reduce(
    (value, currentValue) => value + currentValue.data.price.item.price,
    0
  );

  return (
    <div className={style.cart}>
      <WrapperPopUp id="cart" openPopUp={openPopUp} setOpenPopUp={setOpenPopUp}>
        <div className={style.cartOrder}>
          <h3>Ваш заказ</h3>
          <hr />

          {arrayOfProducts.map((item) => (
            <CartItem key={item.data.detail.spuId} data={item.data} />
          ))}
          <hr />
          <p className={style.totalSum}>Сумма: ${totalSum / 100}</p>
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
        <span className={style.cartNumberProducts}>
          {arrayOfProducts.length}
        </span>
      </div>
    </div>
  );
}

export default Cart;
