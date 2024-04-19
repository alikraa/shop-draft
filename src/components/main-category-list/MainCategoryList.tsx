import sneakers from '../../images/sneakers.jpg';
import clothes from '../../images/clothes.jpg';
import clock from '../../images/clock.jpg';
import backpack from '../../images/backpack.jpg';
import style from './style.module.scss';

function MainCategoryList() {
  return (
    <div className={style.mainCategories}>
      <div className="container">
        <ul className={style.mainCategoriesList}>
          <li>
            <figure className={style.categoryItem}>
              <div className={style.imgWrapper}>
                <img src={sneakers} alt="Sneakers" />
              </div>
              <figcaption>Обувь</figcaption>
            </figure>
          </li>

          <li>
            <figure className={style.categoryItem}>
              <div className={style.imgWrapper}>
                <img src={clothes} alt="Clothes" />
              </div>
              <figcaption>Одежда</figcaption>
            </figure>
          </li>

          <li>
            <figure className={style.categoryItem}>
              <div className={style.imgWrapper}>
                <img src={clock} alt="Clock" />
              </div>
              <figcaption>Часы</figcaption>
            </figure>
          </li>

          <li>
            <figure className={style.categoryItem}>
              <div className={style.imgWrapper}>
                <img src={backpack} alt="Backpack" />
              </div>
              <figcaption>Рюкзаки</figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainCategoryList;
