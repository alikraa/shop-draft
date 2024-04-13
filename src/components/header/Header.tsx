import searchIcon from '../../images/icons/search-icon.svg';
import logo from '../../images/icons/cat-logo.svg';
import style from './style.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerActions}>
        <div className={style.headerBurgerMenu}>
          <div className={style.burgerMenuButton}>
            <span />
          </div>
        </div>

        <div className={style.search}>
          <img
            src={searchIcon}
            title="Найти"
            alt="Найти"
            className={style.searchIcon}
          />
        </div>
      </div>

      <div className="container">
        <div className={style.headerContent}>
          <div className={style.headerLogo}>
            <img src={logo} alt="Logo" />
          </div>
          <h1>Header</h1>
          <div className={style.headerContentMenu}>
            <ul className={style.menuList}>
              <li>Мужчинам</li>
              <li>Женщинам</li>
              <li>Детям</li>
              <li>О нас</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
