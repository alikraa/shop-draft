import checkmarkIcon from '../../images/icons/checkmark-icon.svg';
import style from './style.module.scss';

function WhyDidYouChooseUs() {
  return (
    <div className={style.whyDidYouChooseUs} id="reason-list">
      <div className="container">
        <h2>Почему Вы выбрали нас?</h2>
        <p>
          Мы помогаем Вам привезти одежду и аксессуары как можно быстрее с
          китайских площадок: Nike, Adidas, Poizon и других (с какой площадки,
          какой товар Вы можете узнать благодаря информационным стикерам)
        </p>
        <ul className={style.reasonList}>
          <li>
            <img
              src={checkmarkIcon}
              alt="Checkmark"
              className={style.checkmarkIcon}
            />
            Доставка от 4 до 20 дней
          </li>

          <li>
            <img
              src={checkmarkIcon}
              alt="Checkmark"
              className={style.checkmarkIcon}
            />
            Закупаем только на официальных площадках Китая
          </li>

          <li>
            <img
              src={checkmarkIcon}
              alt="Checkmark"
              className={style.checkmarkIcon}
            />
            Дешевле, чем в российских магазинах
          </li>

          <li>
            <img
              src={checkmarkIcon}
              alt="Checkmark"
              className={style.checkmarkIcon}
            />
            Возвращаем деньги за свои ошибки
          </li>

          <li>
            <img
              src={checkmarkIcon}
              alt="Checkmark"
              className={style.checkmarkIcon}
            />
            Тщательно подбираем товар и проверяем его качество
          </li>

          <li>
            <img
              src={checkmarkIcon}
              alt="Checkmark"
              className={style.checkmarkIcon}
            />
            Любим свое дело
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WhyDidYouChooseUs;
