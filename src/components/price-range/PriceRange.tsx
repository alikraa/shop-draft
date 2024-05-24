import { useState } from 'react';
import Nouislider from "nouislider-react";
import "nouislider/dist/nouislider.css";

import style from './style.module.scss';
import './range-style.css';

function PriceRange() {
  const [minValue, setMinValue] = useState(500);
  const [maxValue, setMaxValue] = useState(999999);

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
            value={minValue}
            onChange={(event) => setMinValue(Number(event.target.value))}
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
            value={maxValue}
            onChange={(event) => setMaxValue(Number(event.target.value))}
          />
          <span>P</span>
        </label>
      </div>
      <Nouislider
        range={{ min: 500, max: 999999 }}
        start={[minValue, maxValue]}
        connect
        step={1}
        onUpdate={(values, handle) => {
          if (handle) {
            setMaxValue(Math.round(values[1]));
          } else {
            setMinValue(Math.round(values[0]));
          }
        }}
      />
      <input type="range" min="500" max="999999"/>
    </div>
  );
}

export default PriceRange;
