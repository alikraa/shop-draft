import database from '../../database.json';
import { Item } from '../../ts/types';
import { arrayOfProducts } from '../../ts/view';
import Product from './Product';
import style from './style.module.scss';

function ProductList() {
  const addProductToCart = (item: Item) => {
    arrayOfProducts.push(item);
  };
  return (
    <div className={style.productList}>
      {database.map((item) => (
        <Product
          key={item.data.detail.spuId}
          data={item.data}
          onClickButton={() => addProductToCart(item)}
        />
      ))}
    </div>
  );
}

export default ProductList;
