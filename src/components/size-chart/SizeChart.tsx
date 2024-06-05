import { nanoid } from 'nanoid';
import style from './style.module.scss';

interface SizeChartProps {
  sizes: string;
}

function SizeChart({ sizes }: SizeChartProps) {
  const updatedSizes = sizes
    .split(',')
    .map((item) => ({ id: nanoid(), value: item }));
  return (
    <div className={style.sizeChart}>
      {updatedSizes.map((item) => (
        <span key={item.id}>{item.value}</span>
      ))}
    </div>
  );
}

export default SizeChart;
