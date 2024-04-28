import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
import style from './style.module.scss';
import './range-style.css';

function PriceRange() {
  return (
    <div className={style.range}>
      <h2>Цена</h2>
      <div className={style.rangeSlider} id="range-slider" />
      <div className={style.rangeInputs}>
        <label htmlFor="input-0">
          <span>от</span>
          <input
            type="number"
            min="500"
            max="999999"
            placeholder="500"
            id="input-0"
          />
          <span>P</span>
        </label>

        <label htmlFor="input-1">
          <span>до</span>
          <input
            type="number"
            min="500"
            max="999999"
            placeholder="999999"
            id="input-1"
          />
          <span>P</span>
        </label>
      </div>
      <Nouislider
        range={{ min: 500, max: 999999 }}
        start={[500, 999999]}
        connect
        step={1}
      />
    </div>
  );
}

export default PriceRange;
