import FormSection from '../Sections/FormSection/FormSection'
import ContactSection from '../Sections/ContactSection/ContactSection'
import SectionFirst from '../Sections/SectionFirst/SectionFirst'
import style from './style.module.css'
import Carousel from '../Carousel/Carousel'
export default function Main(): JSX.Element {
  return (
    <div className={style.container}>
      <SectionFirst />
      <Carousel />
      <ContactSection />
      <FormSection />
    </div>
  )
}
