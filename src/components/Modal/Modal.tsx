import { useNavigate } from 'react-router-dom'
import ContactForm from '../ContactForm/ContactForm'
import style from './style.module.css'

export default function Modal (): JSX.Element {
  const navigate = useNavigate()
  return (
    <>
    <div className={style.vrapper} onClick={() => { navigate('/') }}></div>
      <div className={style.container}>
        <ContactForm />
      </div>
    </>
  )
}
