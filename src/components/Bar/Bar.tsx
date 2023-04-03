import { useState } from 'react'
import style from './style.module.css'
export default function Bar ({ title, about }: { title: string, about: string }): JSX.Element {
  const [isHover, setIsHover] = useState(false)
  return (
    <div className={style.container} onMouseEnter={() => { setIsHover(true) } } onMouseLeave={() => { setIsHover(false) } }>
        <h1 className={style.title}>{title}</h1>
        <div style={isHover ? { display: 'block' } : { display: 'none' }}>{about}</div>
    </div>
  )
}
