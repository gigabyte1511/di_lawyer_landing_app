import style from './style.module.css'
import instagram from './img/instagram.png'
import instgram_logo from './img/instagramLogo.svg'
import telegram from './img/telegram.png'
import telegram_logo from './img/telegram-logo.svg'

export default function ContactSection (): JSX.Element {
  return (
    <section className={style.container}>
      <h1 className={style.header}>Связаться со мной</h1>
      <div className={style.grid}>
          <img className={style.imgFirst} src={instagram} alt="" />
          <div className={style.introFirst}>
            Чем раньше вы свяжетесь с адвокатом, тем больше шансов выиграть дело и сохранить ваши нервы! Социальные сети и мессенджеры - самый быстрый и удобный на данный момент способ связаться и поддерживать связь со мной.
          </div>
          <div className={style.introSecond}>
            <div>
              Подписывайтесь на мой Instagram и Telegram, там вы найдете больше информации обо мне, а также узнаете много нового и полезного.
            </div>
            <div className={style.buttonContainer}>
              <a href="https://www.instagram.com/blonde__lawyer/" target = "_blank" rel="noreferrer">
                <button className={style.instButton}>
                  <p>Instagram</p>
                  <img src={instgram_logo} alt="" />
                </button>
              </a>
              <a href="https://t.me/almyashevadiana" target = "_blank" rel="noreferrer">
                <button className={style.telegButton}>
                  <p>Telegram</p>
                  <img src={telegram_logo} alt="" />
                </button>
              </a>
            </div>
          </div>
          <img className={style.imgSecond} src={telegram} alt="" />
      </div>
    </section>
  )
}
