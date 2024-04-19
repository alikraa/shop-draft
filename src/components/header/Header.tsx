/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import searchIcon from '../../images/icons/search-icon.svg';
import logo from '../../images/icons/cat-logo.svg';
import WrapperPopUp from '../wrapper-pop-up/WrapperPopUp';
import SidebarCategoryList from '../sidebar-category-list/SidebarCategoryList';
import ModalForm from '../modal-form/ModalForm';
import style from './style.module.scss';

function Header() {
  const [openPopUp, setOpenPopUp] = useState<boolean>(false);
  const [openModalForm, setOpenModalForm] = useState<boolean>(false);

  return (
    <header className={style.header}>
      <div className={style.headerActions}>
        <div
          className={style.headerBurgerMenu}
          onClick={() => setOpenPopUp(!openPopUp)}
        >
          <div className={style.burgerMenuButton}>
            <span />
          </div>
        </div>

        <div
          className={style.search}
          onClick={() => setOpenModalForm(!openModalForm)}
        >
          <img
            src={searchIcon}
            title="Найти"
            alt="Найти"
            className={style.searchIcon}
          />
        </div>
      </div>

      <ModalForm
        openModalForm={openModalForm}
        setOpenModalForm={setOpenModalForm}
      />

      <WrapperPopUp openPopUp={openPopUp} setOpenPopUp={setOpenPopUp}>
        <SidebarCategoryList />
      </WrapperPopUp>

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
