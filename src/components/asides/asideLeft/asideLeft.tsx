import { FiGithub, FiTwitter, FiLinkedin, FiCodepen } from 'react-icons/fi'
import style from './asideLeft.module.css'

export default function AsideLeft(): JSX.Element {
    return (
        <aside className={style.asideLeft}>
            <div className={style.iconsContainer}>
                <FiGithub  className={style.first}/>
                <FiTwitter className={style.second}/>
                <FiLinkedin className={style.third}/>
                <FiCodepen className={style.fourt}/>
            </div>
           
            <div className={style.decoration}></div>
        </aside>
    )
}