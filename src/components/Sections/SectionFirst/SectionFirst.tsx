import style from './style.module.css'
import dLeft from './img/DLeft.png'

export default function SectionFirst (): JSX.Element {
  return (
    <section className={style.container}>
      <h1 className={style.header}>Когда нужно обращаться к адвокату?</h1>
      <div className={style.imageVrapper}>
        <img className={style.image} src={dLeft} alt="" />
        <div className={style.textfield}>
          <p><b>Чем раньше, тем лучше!</b> Адвокат - ваш единственный советчик и помощник, который находится на вашей стороне и профессионально понимает суть происходящих событий.</p>
          <p><b>Адвокат поможет вам</b> выстроить правильную линию защиты, сформировать верные показания, которые необходимо довести до следствия, доказать вашу невиновность и правоту в суде или смягчить наказание.</p>
          <p><b>Я готова приступить к защите Ваших интересов</b> на любой стадии процесса, но лучше обратиться за помощью прямо сейчас!</p>
          <button className={style.button}>Получить консультацию</button>
        </div>
      </div>
    </section>
  )
}
