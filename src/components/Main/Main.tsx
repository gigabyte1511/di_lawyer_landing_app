import FormSection from '../Sections/FormSection/FormSection'
import ContactSection from '../Sections/ContactSection/ContactSection'
import SectionFirst from '../Sections/SectionFirst/SectionFirst'
import style from './style.module.css'
import Slirer from '../Slider/Slirer'
export default function Main (): JSX.Element {
  return (
    <div className={style.container}>
        <SectionFirst />
        <Slirer />
        <ContactSection />
        <FormSection />
    </div>
  )
}
