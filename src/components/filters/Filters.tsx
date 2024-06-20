// import PriceRange from '../price-range/PriceRange';
import { useAppDispatch } from '../../redux/hooks';
import { setCurrentBrand, sortingByBrands } from '../../redux/shop-slice';
import { brands } from '../../ts/view';
import style from './style.module.scss';

function Filters() {
  const dispatch = useAppDispatch();

  return (
    <div className={style.filters}>
      <div className={style.brands}>
        <h2>Бренды</h2>
        {brands.map((item) => (
          <label key={item.id} htmlFor={item.id}>
            <input
              type="checkbox"
              id={item.id}
              value={item.title}
              className={style.realCheckbox}
              onChange={(event) => {
                dispatch(setCurrentBrand(event.target.value));

                dispatch(sortingByBrands());
              }}
            />
            <span className={style.customCheckbox} />
            {item.title}
          </label>
        ))}
      </div>
      {/* <PriceRange /> */}
    </div>
  );
}

export default Filters;
