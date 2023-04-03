import ContactSection from '../Sections/ContactSection/ContactSection'
import SectionFirst from '../Sections/SectionFirst/SectionFirst'
import style from './style.module.css'
export default function Main (): JSX.Element {
  return (
    <div className={style.container}>
        <SectionFirst />
        <ContactSection />
    </div>
  )
}
