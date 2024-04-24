import style from './style.module.scss';

function Filters() {
  return (
    <div className={style.filters}>
      <div className={style.brands}>
        <h2>Бренды</h2>
        <label htmlFor="1">
          <input type="checkbox" name="" id="1" className={style.realCheckbox} />
          <span className={style.customCheckbox} />
          Jordan
        </label>
        <label htmlFor="2">
          <input type="checkbox" name="" id="2" className={style.realCheckbox} />
          <span className={style.customCheckbox} />
          Nike
        </label>
        <label htmlFor="3">
          <input type="checkbox" name="" id="3" className={style.realCheckbox} />
          <span className={style.customCheckbox} />
          Converse
        </label>
      </div>
    </div>
  );
}

export default Filters;
