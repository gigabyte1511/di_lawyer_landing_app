import style from './style.module.css'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

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
           name: Yup.string().required('Please enter full name'),
           phone: Yup.string().required('Please enter full name'),
           email: Yup.string()
             .email()
             .required('Enter valid email-id')
         })}
         onSubmit={(values, actions) => {
           console.log({ values, actions })
         }}
       >
        {({ errors, touched }) => (
         <Form className={style.form}>
           <Field id="name" name="name" placeholder="Ваше имя" />
           {errors.name && touched.name ? (<div >{errors.name}</div>) : null}

           <Field id="phone" name="phone" placeholder="Ваш номер телефона" />
           {errors.phone && touched.phone ? (<div >{errors.phone}</div>) : null}

           <Field id="email" name="email" placeholder="Ваш email" />
           {errors.email && touched.email ? (<div >{errors.email}</div>) : null}

           <button className={style.button} type="submit">Оставить заявку</button>
         </Form>
        )}
       </Formik>
     </div>
  )
}
