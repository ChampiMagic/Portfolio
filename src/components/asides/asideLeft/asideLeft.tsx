import { FiGithub, FiTwitter, FiLinkedin, FiCodepen } from 'react-icons/fi'
import style from './asideLeft.module.css'

export default function AsideLeft(): JSX.Element {
    return (
        <aside className={style.asideLeft}>
            <div className={style.iconsContainer}>

                <a href="https://github.com/ChampiMagic">
                <FiGithub  className={style.first}/>
                </a>
                
                <a href="https://twitter.com/ChampiMagic">
                    <FiTwitter className={style.second}/>
                </a>
                    
                <a href="https://www.linkedin.com/in/homerogazze/">
                    <FiLinkedin className={style.third}/>
                </a>
                    
                <a href="https://codepen.io/champimagic">
                <FiCodepen className={style.fourt}/>
                </a>
                
            </div>
           
            <div className={style.decoration}></div>
        </aside>
    )
}