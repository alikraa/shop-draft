import Product from './Product';
import style from './style.module.scss';

function ProductList() {
  return (
    <div className={style.productList}>
      <Product />
      <Product />
      <Product />
    </div>
  );
}

export default ProductList;
