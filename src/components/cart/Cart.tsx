/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import WrapperPopUp from '../wrapper-pop-up/WrapperPopUp';
import cartIcon from '../../images/icons/cart-icon.svg';
import style from './style.module.scss';

function Cart() {
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  return (
    <div className={style.cart}>
      <WrapperPopUp
        id="cart"
        openPopUp={openPopUp}
        setOpenPopUp={setOpenPopUp}
      >
        <div className="cart__modal">
          <div className="order">
            <h3>Ваш заказ</h3>
            <hr />
            <div className="item">
              <img src="./sneakers.jpg" alt="" />
              <div className="name">
                <p className="item-name">Name</p>
                <p className="item-details">Details</p>
              </div>
              <input
                type="number"
                name=""
                id=""
                min="1"
                className="input-order"
              />
              <p className="price">1 500 p.</p>
              <button type="button" className="remove">
                X
              </button>
            </div>

            <div className="item">
              <img src="./sneakers.jpg" alt="" />
              <div className="name">
                <p className="item-name">Name</p>
                <p className="item-details">Details</p>
              </div>
              <input
                type="number"
                name=""
                id=""
                min="1"
                className="input-order"
              />
              <p className="price">1 500 p.</p>
              <button type="button" className="remove">
                X
              </button>
            </div>

            <div className="item">
              <img src="./sneakers.jpg" alt="" />
              <div className="name">
                <p className="item-name">Name</p>
                <p className="item-details">Details</p>
              </div>
              <input
                type="number"
                name=""
                id=""
                min="1"
                className="input-order"
              />
              <p className="price">1 500 p.</p>
              <button type="button" className="remove">
                X
              </button>
            </div>
            <hr />
            <p className="total-sum">Сумма: 999 р.</p>
          </div>

          <form className="send-form">
            <label htmlFor="name">Имя</label>
            <input type="text" className="name" id="name" />
            {/* валидация номера телефона */}
            <label htmlFor="tel">Телефон</label>
            <input
              type="tel"
              name=""
              id="tel"
              placeholder="+7"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
            <button type="submit">Заказать</button>
          </form>
        </div>
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
