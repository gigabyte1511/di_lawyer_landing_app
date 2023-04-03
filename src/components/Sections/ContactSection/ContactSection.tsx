import style from './style.module.css'
import contact from './img/contact.png'
import ContactForm from '../../ContactForm/ContactForm'

export default function ContactSection (): JSX.Element {
  return (
    <div className={style.container}>
      <h1 className={style.header}>Остались вопросы?</h1>
      <div className={style.imageVrapper}>
        <img className={style.image} src={contact} alt="" />
        <div className={style.form}>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
