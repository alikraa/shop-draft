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
        {brands.map((item, index) => (
          <label key={index} htmlFor={String(index)}>
            <>
              <input
                type="checkbox"
                id={String(index)}
                value={item}
                className={style.realCheckbox}
                onChange={(event) => {
                  dispatch(setCurrentBrand(event.target.value));

                  dispatch(sortingByBrands());
                }}
              />
              <span className={style.customCheckbox} />
              {item}
            </>
          </label>
        ))}
      </div>
      {/* <PriceRange /> */}
    </div>
  );
}

export default Filters;
