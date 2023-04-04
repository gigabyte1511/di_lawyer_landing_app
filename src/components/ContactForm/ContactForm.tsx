import style from './style.module.css'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import CustomInput from '../CustomInput/CustomInput'

interface MyFormValues {
  name: string
  phone: string
  email: string
}

export default function ContactForm (): JSX.Element {
  const initialValues: MyFormValues = { name: '', phone: '', email: '' }
  return (
     <div className={style.container}>
        <h3 className={style.header}>Оставте заявку на консультацию</h3>
       <Formik
         initialValues={initialValues}
         validationSchema={Yup.object({
           name: Yup.string().required('Введите ваше имя'),
           phone: Yup.string().required('Введите ваш номер телефона'),
           email: Yup.string()
             .email('Невалидный email-адрес')
             .required('Введите ваш email-адрес')
         })}
         onSubmit={(values, actions) => {
           console.log({ values, actions })
         }}
       >
        {({ errors, touched }) => (
         <Form className={style.form}>
           <CustomInput id="name" name="name" placeholder="Ваше имя" errors = {errors.name} touched = {touched.name} />
           <CustomInput id="phone" name="phone" placeholder="Ваш номер телефона" errors = {errors.phone} touched = {touched.phone} />
           <CustomInput id="email" name="email" placeholder="Ваш email" errors = {errors.email} touched = {touched.email} />
           <button className={style.button} type="submit">Оставить заявку</button>
         </Form>
        )}
       </Formik>
     </div>
  )
}
