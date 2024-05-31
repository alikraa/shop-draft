// import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import {
  removeProductFromCart,
  increase,
  decrease,
  saveCounterValue,
} from '../../redux/cart-slice';
import { CounterData, Product } from '../../ts/types';
// import sneakers from '../../images/sneakers.jpg';
import upIcon from '../../images/icons/up-icon.svg';
import downIcon from '../../images/icons/down-icon.svg';
import style from './style.module.scss';

function CartItem({ data, quantity }: Product) {
  const dispatch = useAppDispatch();

  return (
    <div className={style.cartItem}>
      <img src={data.detail.logoUrl} alt="Sneakers" />
      <div className={style.itemDescription}>
        <p>{data.detail.title}</p>
        <p>Details</p>
      </div>
      <div className={style.counter}>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(event) => {
            const counterData: CounterData = {
              spuId: data.detail.spuId,
              value: Number(event.target.value),
            };

            if (Number(event.target.value)) {
              dispatch(saveCounterValue(counterData));
            } else {
              dispatch(saveCounterValue({ ...counterData, value: 1 }));
            }
          }}
        />
        <div className={style.countControls}>
          <button
            type="button"
            onClick={() => dispatch(increase(data.detail.spuId))}
          >
            <img src={upIcon} alt="Increase" />
          </button>
          <button
            type="button"
            onClick={() => dispatch(decrease(data.detail.spuId))}
          >
            <img src={downIcon} alt="Decrease" />
          </button>
        </div>
      </div>
      <p>${(data.price.item.price / 100) * quantity}</p>
      <button
        type="button"
        className={style.deleteButton}
        onClick={() => dispatch(removeProductFromCart(data.detail.spuId))}
      >
        X
      </button>
    </div>
  );
}

export default CartItem;
