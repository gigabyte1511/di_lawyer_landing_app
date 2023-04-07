import style from './style.module.css'
export default function Footer (): JSX.Element {
  return (
    <div className={style.container}>
        <div className={style.contacts}>
            <div>
                <h1>Альмяшева Диана Ильдаровна</h1>
                <p>Ваш личный адвокат</p>
                <p>Регистрационный номер в реестре адвокатов: 4.20 </p>
            </div>
            <div>
                <h1>Оставить заявку на консультацю</h1>
                <a href="contacts">Заполнить форму </a>
            </div>
            <div className={style.socialContainer}>
                <h1>Подписаться на меня</h1>
                <a href="https://www.instagram.com/blonde__lawyer/" target = "_blank" rel="noreferrer">Instagram</a>
                <a href="https://t.me/almyashevadiana" target = "_blank" rel="noreferrer">Telegram</a>
            </div>
        </div>
        <div className={style.devInfo}>
            <p>© Kimry development 2023</p>
            <p>Gabets Denis <a href="https://github.com/gigabyte1511">https://github.com/gigabyte1511</a></p>
            <p>V1.0 Developed by React 18.2.0, Builded by Vite</p>
        </div>
    </div>
  )
}
