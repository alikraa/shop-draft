/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { nanoid } from 'nanoid';
import { Item } from '../../ts/types';
import { addProductToCart } from '../../redux/cart-slice';
import { useAppDispatch } from '../../redux/hooks';
import style from './style.module.scss';

interface SizeChartProps {
  item: Item;
  sizes: string;
  addToCart: boolean;
  setAddToCart: (value: boolean) => void;
}

function SizeChart({ item, sizes, addToCart, setAddToCart }: SizeChartProps) {
  const dispatch = useAppDispatch();

  const updatedSizes = sizes
    .split(',')
    .map((elem) => ({ id: nanoid(), value: elem }));

  return (
    <div className={style.sizeChart}>
      {updatedSizes.map((size) => (
        <span
          key={size.id}
          onClick={() => {
            setAddToCart(!addToCart);
            dispatch(addProductToCart({ data: item.data, size: size.value }));
          }}
        >
          {size.value}
        </span>
      ))}
    </div>
  );
}

export default SizeChart;
