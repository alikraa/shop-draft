import database from '../../database.json';
import { addProductToCart } from '../../redux/cart-slice';
import { useAppDispatch } from '../../redux/hooks';
import Product from './Product';
import style from './style.module.scss';

function ProductList() {
  const dispatch = useAppDispatch();

  return (
    <div className={style.productList}>
      {database.map((item) => (
        <Product
          key={item.data.detail.spuId}
          data={item.data}
          onClickButton={() => dispatch(addProductToCart(item))}
        />
      ))}
    </div>
  );
}

export default ProductList;
