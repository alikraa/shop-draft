import style from './style.module.scss';

function SidebarCategoryList() {
  return (
    <ul className={style.sidebarCategoryList}>
      <li>Новинки</li>
      <li>Обувь</li>
      <li>Одежда</li>
      <li>Аксессуары</li>
    </ul>
  );
}

export default SidebarCategoryList;
