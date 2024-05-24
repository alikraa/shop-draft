import Product from './Product';
import style from './style.module.scss';
import database from '../../database.json';

function ProductList() {
  return (
    <div className={style.productList}>
      {database.map((item) => (
        <Product
          key={item.data.detail.spuId}
          productName={item.data.detail.title}
          productImage={item.data.detail.logoUrl}
        />
      ))}
    </div>
  );
}

export default ProductList;
