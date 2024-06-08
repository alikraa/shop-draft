// import sneakers from '../../images/sneakers.jpg';
import { useState } from 'react';
import { Item } from '../../ts/types';
import SizeChart from '../size-chart/SizeChart';
import WrapperModalWindow from '../wrapper-modal-window/WrapperModalWindow';
import style from './style.module.scss';

function Product({ data }: Item) {
  const [addToCart, setAddToCart] = useState<boolean>(false);

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
      {addToCart && (
        <WrapperModalWindow>
          <SizeChart
            item={{ data }}
            sizes={data.sizeDto.sizeInfo.sizeTemplate.list[0].sizeValue}
            addToCart={addToCart}
            setAddToCart={setAddToCart}
          />
        </WrapperModalWindow>
      )}
      <button type="button" onClick={() => setAddToCart(!addToCart)}>
        Добавить в корзину
      </button>
    </div>
  );
}

export default Product;
