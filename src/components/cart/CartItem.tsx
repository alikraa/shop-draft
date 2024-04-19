import sneakers from '../../images/sneakers.jpg';
import upIcon from '../../images/icons/up-icon.svg';
import downIcon from '../../images/icons/down-icon.svg';
import style from './style.module.scss';

function CartItem() {
  return (
    <div className={style.cartItem}>
      <img src={sneakers} alt="Sneakers" />
      <div className={style.itemDescription}>
        <p>Name</p>
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
      <p>1 500 p.</p>
      <button type="button" className={style.deleteButton}>
        X
      </button>
    </div>
  );
}

export default CartItem;
