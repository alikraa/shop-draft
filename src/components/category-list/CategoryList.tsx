import style from './style.module.scss';

function CategoryList() {
  return (
    <ul className={style.categoryList}>
      <li>Новинки</li>
      <li>Обувь</li>
      <li>Одежда</li>
      <li>Аксессуары</li>
    </ul>
  );
}

export default CategoryList;
