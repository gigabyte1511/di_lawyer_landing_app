import style from './style.module.css'
import instagram from './img/instagram.png'
import instgram_logo from './img/instagramLogo.svg'
import telegram from './img/telegram.png'
import telegram_logo from './img/telegram-logo.svg'

export default function ContactSection (): JSX.Element {
  return (
    <section className={style.container}>
      <h1 className={style.header}>Связаться со мной</h1>
      <div className={style.messengers}>
        <div className={style.instagram}>
          <img src={instagram} alt="" />
        </div>
        <div className={style.telegramm}>
          <img src={telegram} alt="" />
        </div>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.instButton}>
          <p>Instagram</p>
          <img src={instgram_logo} alt="" />
        </button>
        <button className={style.telegButton}>
          <p>Telegram</p>
          <img src={telegram_logo} alt="" />
        </button>
      </div>
    </section>
  )
}
