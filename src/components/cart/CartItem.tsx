import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { removeProductFromCart } from '../../redux/cart-slice';
import { Item } from '../../ts/types';
// import sneakers from '../../images/sneakers.jpg';
import upIcon from '../../images/icons/up-icon.svg';
import downIcon from '../../images/icons/down-icon.svg';
import style from './style.module.scss';

function CartItem({ data }: Item) {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState<number>(1);

  const increase = () => {
    setValue((prev) => prev + 1);
  };

  const decrease = () => {
    if (value === 1) return;

    setValue((prev) => prev - 1);
  };

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
          min={value}
          value={value}
          onChange={(event) => {
            if (Number(event.target.value)) {
              setValue(Number(event.target.value));
            } else {
              setValue(1);
            }
          }}
        />
        <div className={style.countControls}>
          <button type="button" onClick={increase}>
            <img src={upIcon} alt="Increase" />
          </button>
          <button type="button" onClick={decrease}>
            <img src={downIcon} alt="Decrease" />
          </button>
        </div>
      </div>
      <p>${(data.price.item.price / 100) * value}</p>
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
