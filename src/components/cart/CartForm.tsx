import style from './style.module.scss';

function CartForm() {
  return (
    <form className={style.cartForm}>
      <label htmlFor="userName">
        Имя
        <br />
        <input type="text" id="userName" />
      </label>
      {/* валидация номера телефона */}
      <label htmlFor="phoneNumber">
        Телефон
        <br />
        <input
          type="tel"
          id="phoneNumber"
          placeholder="+7"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
      </label>
      <button type="submit">Заказать</button>
    </form>
  );
}

export default CartForm;
