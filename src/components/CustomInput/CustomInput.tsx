import style from './style.module.css'
import { Field } from 'formik'
import { useState } from 'react'
interface Props {
  id: string
  name: string
  placeholder: string
  errors: string
  touched: boolean
}
// export default function CustomInput ({ id, name, placeholder, errors, touched }: Props): JSX.Element {
//   const [isEmpty, setIsEmpty] = useState(true)
//   console.log(isEmpty)
//   return (
//     <div className={style.container}>
//         <div className ={style.input}>
//             <Field id={id} name={name} validate= {(e) => { setIsEmpty(!e) }}/>
//             <p className={isEmpty ? style.placeholder : `${style.placeholder} ${style.move}`}>{placeholder}</p>
//         </div>
//         {errors && touched ? (<div className={style.error} >{errors}</div>) : null}
//     </div>
//   )
// }
export default function CustomInput ({ id, name, placeholder, errors, touched }: Props): JSX.Element {
  return (
      <div className={style.container}>
          <div className ={style.input}>
              <Field id={id} name={name} placeholder = {placeholder}/>
              <label>{placeholder}</label>
          </div>
          {errors && touched ? (<div className={style.error} >{errors}</div>) : null}
      </div>
  )
}
