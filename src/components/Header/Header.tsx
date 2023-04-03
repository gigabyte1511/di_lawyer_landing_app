import style from './style.module.css'
import header from './img/header.png'
import Bar from '../Bar/Bar'

function Header (): JSX.Element {
  return (
    <header className={style.container}>
        <img className={style.image} src={header} alt="" />
        <div className={style.textfield} lang="ru">
            <h2>Ваш личный адвокат</h2>
            <h1>Альмяшева Диана Ильдаровна</h1>
            <p>Регистрационный номер в реестре адвокатов: 228</p>
            <button className={style.button}>Получить консультацию</button>

        </div>
        <nav className={style.navigation}>
            <div>Обо мне</div>
            <div>Услуги</div>
            <div>Отзывы</div>
        </nav>
        <div className={style.services}>
            <Bar title = "Консультация" about='Бесплатная консультация' />
            <Bar title = "Консультация" about='Бесплатная консультация' />
            <Bar title = "Консультация" about='Бесплатная консультация' />
            <Bar title = "Консультация" about='Бесплатная консультация' />
            <Bar title = "Консультация" about='Бесплатная консультация' />
            <Bar title = "Консультация" about='Бесплатная консультация' />
        </div>
    </header>
  )
}

export default Header
