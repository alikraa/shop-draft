// import database from '../../database.json';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import Product from './Product';
import style from './style.module.scss';

function ProductList() {
  const { productList, searchValue } = useAppSelector(
    (state: RootState) => state.shopData
  );

  return (
    <div className={style.productList}>
      {productList
        .filter((item) =>
          item.data.detail.title.toLowerCase().includes(searchValue)
        )
        .map((item) => (
          <Product key={item.data.detail.spuId} data={item.data} />
        ))}
    </div>
  );
}

export default ProductList;
