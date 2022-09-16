import { FiGithub, FiTwitter, FiLinkedin, FiCodepen } from 'react-icons/fi'
import style from './mobileFooter.module.css'

export default function MobileFooter(): JSX.Element {
    return (
        <footer id="footer" className={style.footer}>

            <div className={style.decoration}></div>

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

            

             <div className={style.iconsContainer}>
                <p className={style.K}>K</p>
                <p className={style.A}>A</p>
                <p className={style.I}>I</p>
                <p className={style.Z}>Z</p>
                <p className={style.E}>E</p>
                <p className={style.N}>N</p>
            </div>
            
         
           
        </footer>
    )
}