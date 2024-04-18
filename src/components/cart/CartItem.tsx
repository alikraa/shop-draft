import sneakers from '../../images/sneakers.jpg';
import style from './style.module.scss';

function CartItem() {
  return (
    <div className={style.cartItem}>
      <img src={sneakers} alt="Sneakers" />
      <div className={style.itemDescription}>
        <p>Name</p>
        <p>Details</p>
      </div>
      <input type="number" min="1" />
      <p>1 500 p.</p>
      <button type="button">X</button>
    </div>
  );
}

export default CartItem;
