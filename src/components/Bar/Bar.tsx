import { useState } from 'react'
import style from './style.module.css'
export default function Bar ({ title, about }: { title: string, about: JSX.Element }): JSX.Element {
  const [isHover, setIsHover] = useState(false)
  return (
    <div className={isHover ? `${style.container} ${style.hover}` : style.container} onMouseEnter={() => { setIsHover(true) } } onMouseLeave={() => { setIsHover(false) } }>
        <h1 className={style.title}>{title}</h1>
        <div className={isHover ? `${style.more} ${style.hover}` : style.more}>{about}</div>
    </div>
  )
}
