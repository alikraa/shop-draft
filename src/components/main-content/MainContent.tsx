import Filters from '../filters/Filters';
import ProductList from '../product-list/ProductList';
import style from './style.module.scss';

function MainContent() {
  return (
    <div className="container">
      <div className={style.mainContent}>
        <Filters />
        <ProductList />
      </div>
    </div>
  );
}

export default MainContent;
