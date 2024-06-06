/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { nanoid } from 'nanoid';
import style from './style.module.scss';

interface SizeChartProps {
  sizes: string;
  addToCart: boolean;
  setAddToCart: (value: boolean) => void;
}

function SizeChart({ sizes, addToCart, setAddToCart }: SizeChartProps) {
  const updatedSizes = sizes
    .split(',')
    .map((item) => ({ id: nanoid(), value: item }));
  return (
    <div className={style.sizeChart}>
      {updatedSizes.map((item) => (
        <span key={item.id} onClick={() => setAddToCart(!addToCart)}>
          {item.value}
        </span>
      ))}
    </div>
  );
}

export default SizeChart;
