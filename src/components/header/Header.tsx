/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { setSearchValue } from '../../redux/shop-slice';
import { categoryList } from '../../ts/view';
import { CategoryData } from '../../ts/types';
import searchIcon from '../../images/icons/search-icon.svg';
import logo from '../../images/icons/cat-logo.svg';
import style from './style.module.scss';

function Header() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');
  const [categories, setCategories] = useState<CategoryData[]>(categoryList);

  const saveValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(setSearchValue(value.toLowerCase()));
  };

  return (
    <header className={style.header}>
      <div className={style.headerLogo}>
        <img src={logo} alt="Logo" />
        <h1>RunRun Store</h1>
      </div>

      <div className={style.headerContent}>
        <ul className={style.menuList}>
          {categories.map((item) => (
            <li
              key={item.id}
              className={item.status ? style.active : ''}
              onClick={() =>
                setCategories((prev) =>
                  prev.map((elem) =>
                    elem.id === item.id
                      ? { ...elem, status: true }
                      : { ...elem, status: false }
                  )
                )
              }
            >
              {item.title}
            </li>
          ))}
        </ul>

        <form className={style.headerForm} onSubmit={saveValue}>
          <img src={searchIcon} alt="Найти" className={style.formSearchIcon} />
          <input
            type="text"
            className={style.formInput}
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              dispatch(setSearchValue(event.target.value.toLowerCase()));
            }}
          />
          <button type="submit" className={style.formButton}>
            Искать!
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
