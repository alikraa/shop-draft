import sneakers from '../../images/sneakers.jpg';
import style from './style.module.scss';

function Product() {
  return (
    <div className={style.product}>
      <figure>
        <img src={sneakers} alt="Product" className={style.productImg} />
        <figcaption>Jordan 11 Retro DMP &#34;Gratitude&#34; (2023)</figcaption>
      </figure>
      <h3>$199</h3>
    </div>
  );
}

export default Product;
