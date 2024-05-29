// import sneakers from '../../images/sneakers.jpg';
import { Item } from '../../ts/types';
import style from './style.module.scss';

interface ProductProps extends Item {
  onClickButton: () => void;
}

function Product({ data, onClickButton }: ProductProps) {
  return (
    <div className={style.product}>
      <figure>
        <img
          src={data.detail.logoUrl}
          alt="Product"
          className={style.productImg}
        />
        <figcaption>{data.detail.title}</figcaption>
      </figure>
      <h3>${data.price.item.price / 100}</h3>
      <button type="button" onClick={onClickButton}>
        Добавить в корзину
      </button>
    </div>
  );
}

export default Product;
