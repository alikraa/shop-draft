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
    .map((item) => ({ id: nanoid(), value: item }));

  return (
    <div className={style.sizeChart}>
      {updatedSizes.map((elem) => (
        <span
          key={elem.id}
          onClick={() => {
            setAddToCart(!addToCart);
            dispatch(addProductToCart(item));
          }}
        >
          {elem.value}
        </span>
      ))}
    </div>
  );
}

export default SizeChart;
