/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { setSearchValue } from '../../redux/shop-slice';
import formSearchIcon from '../../images/icons/form-search-icon.svg';
import style from './style.module.scss';

interface ModalFormProps {
  openModalForm: boolean;
  setOpenModalForm: (value: boolean) => void;
}

function ModalForm({ openModalForm, setOpenModalForm }: ModalFormProps) {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');

  const saveValue = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(setSearchValue(value.toLowerCase()));
  };

  return (
    <div
      className={
        openModalForm
          ? `${style.modalForm} ${style.modalFormActive}`
          : style.modalForm
      }
    >
      <div className="container">
        <div className={style.modalFormContent}>
          <form className={style.form} onSubmit={saveValue}>
            <img
              src={formSearchIcon}
              alt="Найти"
              className={style.modalFormSearchIcon}
            />
            <input
              type="text"
              className={style.formInput}
              placeholder="Кто ищет, тот всегда найдет"
              value={value}
              onChange={(event) => {
                setValue(event.target.value);

                dispatch(setSearchValue(event.target.value.toLowerCase()));
              }}
            />
            <button type="submit" className={style.modalFormButton}>
              Искать!
            </button>
          </form>
          <div
            className={style.modalFormCloseButton}
            onClick={() => setOpenModalForm(!openModalForm)}
          >
            Х
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
