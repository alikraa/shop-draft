import { useAppDispatch } from '../../redux/hooks';
import { removeProductFromCart } from '../../redux/cart-slice';
import { Item } from '../../ts/types';
// import sneakers from '../../images/sneakers.jpg';
import upIcon from '../../images/icons/up-icon.svg';
import downIcon from '../../images/icons/down-icon.svg';
import style from './style.module.scss';

function CartItem({ data }: Item) {
  const dispatch = useAppDispatch();

  return (
    <div className={style.cartItem}>
      <img src={data.detail.logoUrl} alt="Sneakers" />
      <div className={style.itemDescription}>
        <p>{data.detail.title}</p>
        <p>Details</p>
      </div>
      <div className={style.counter}>
        <input type="number" min="1" />
        <div className={style.countControls}>
          <button type="button">
            <img src={upIcon} alt="Increase" />
          </button>
          <button type="button">
            <img src={downIcon} alt="Decrease" />
          </button>
        </div>
      </div>
      <p>${data.price.item.price / 100}</p>
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
