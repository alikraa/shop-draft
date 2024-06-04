import style from './style.module.scss';

interface WrapperModalWindowProps {
  children: React.ReactNode;
}

function WrapperModalWindow({ children }: WrapperModalWindowProps) {
  return <div className={style.wrapperModalWindow}>{children}</div>;
}

export default WrapperModalWindow;
