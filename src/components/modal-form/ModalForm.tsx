/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import formSearchIcon from '../../images/icons/form-search-icon.svg';
import style from './style.module.scss';

interface ModalFormProps {
  openModalForm: boolean;
  setOpenModalForm: (value: boolean) => void;
}

function ModalForm({ openModalForm, setOpenModalForm }: ModalFormProps) {
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
          <form className={style.form}>
            <img
              src={formSearchIcon}
              alt="Найти"
              className={style.modalFormSearchIcon}
            />
            <input
              type="text"
              className={style.formInput}
              placeholder="Кто ищет, тот всегда найдет"
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
