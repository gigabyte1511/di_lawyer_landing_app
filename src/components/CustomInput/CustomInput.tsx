import style from './style.module.css'
import { Field } from 'formik'
interface Props {
  id: string
  name: string
  placeholder: string
  errors: string | undefined
  touched: boolean | undefined
}
export default function CustomInput ({ id, name, placeholder, errors, touched }: Props): JSX.Element {
  return (
      <div className={style.container}>
          <div className ={style.input}>
              <Field id={id} name={name} placeholder = {placeholder}/>
              <label>{placeholder}</label>
          </div>
          {Boolean(errors) && Boolean(touched) ? (<div className={style.error} >{errors}</div>) : null}
      </div>
  )
}
