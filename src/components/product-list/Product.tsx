import sneakers from '../../images/sneakers.jpg';
import style from './style.module.scss';

interface ProductProps {
  productName: string;
  productImage: string;
}

function Product({ productName, productImage }: ProductProps) {
  return (
    <div className={style.product}>
      <figure>
        <img src={productImage} alt="Product" className={style.productImg} />
        <figcaption>{productName}</figcaption>
      </figure>
      <h3>$199</h3>
      <button>Добавить в корзину</button>
    </div>
  );
}

export default Product;
