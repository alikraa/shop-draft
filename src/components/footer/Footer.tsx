/* eslint-disable jsx-a11y/anchor-is-valid */
import telegramIcon from '../../images/icons/telegram-icon.svg';
import style from './style.module.scss';

function Footer() {
  return (
    <footer className={style.footer}>
      <h3>Подписывайся на наш телеграм-канал</h3>
      <a href="#">
        <img src={telegramIcon} alt="Telegram" />
      </a>
    </footer>
  );
}

export default Footer;
