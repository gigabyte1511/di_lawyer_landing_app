import style from './style.module.css'
import headerImg from './img/HeaderImg.png'
import Bar from '../Bar/Bar'
import { useNavigate } from 'react-router-dom'

function Header (): JSX.Element {
  const navigate = useNavigate()
  const $consultationAbout = (
    <>
      <p>Первичная консультация (устная) - <b>бесплатно</b></p>
      <p>Вторичная консультация (устная или письменная) в зависимости от сложности дела - <b>от 800₽ до 3500₽</b></p>
    </>
  )
  const $docAnalizAbout = (
    <>
      <p>Анализ документов - <b>от 800₽ до 3500₽</b></p>
      <p>Ознакомление с материалами дела - <b>1500₽</b></p>
    </>
  )
  const $docDraftingAbout = (
    <>
      <p>Составление искового заявления/озыва или возражений в суд (без отправки и дальнейшего сопровождения в суде) - <b>2500₽</b></p>
      <p>Составление дополнительных процессуальных документов по ходу дела (в зависимости от содержания и характера документа) - <b>от 500₽ до 1500₽</b></p>
    </>
  )
  const $interestsAbout = (
    <>
      <p>Разовое представление интересов в суде (в зависимости от сложности дела) - <b>от 3000₽ до 5000₽</b></p>
      <p>Представление интересов в судах всех инстанций (от первой до кассационной), участие во всех судебных заседаниях - <b>20000₽</b></p>
    </>
  )
  const $zelenogradAbout = (
    <>
      <p>Показать постопримечательности города (в зависимости от удаленности) - <b>от 1000₽ до 5000₽</b></p>
      <p>Покачаться на качелях (в зависимости от продолжительности) - <b>от 300₽ до 1000₽</b></p>
      <p>Покататьтся на мерседесе - <b>2000₽</b></p>
      <p>*для классного парня Дениса услуги выше <b>бесплатны</b></p>
    </>
  )
  return (
    <header className={style.container}>
        <img className={style.image} src={headerImg} alt="" />
        <div className={style.textfield} lang="ru">
            <h2>Ваш личный адвокат</h2>
            <h1>Альмяшева Диана Ильдаровна</h1>
            <p>Регистрационный номер в реестре адвокатов: 4.20</p>
            <button className={style.button} onClick={() => { navigate('/contacts') }}>Получить консультацию</button>

        </div>
        {/* <nav className={style.navigation}>
            <div>Обо мне</div>
            <div>Услуги</div>
            <div>Отзывы</div>
        </nav> */}
        <div className={style.barContainer}>
            <Bar title = "Консультация"
              about={$consultationAbout}
              />
            <Bar title = "Анализ документов" about={$docAnalizAbout} />
            <Bar title = "Составление документов" about={$docDraftingAbout} />
            <Bar title = "Представление интересов в суде" about={$interestsAbout} />
            <Bar title = "Экскурсия по Зеленограду" about={$zelenogradAbout} />

        </div>
    </header>
  )
}

export default Header
