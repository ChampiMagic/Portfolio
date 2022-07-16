import style from './navigation.module.css'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { FaConnectdevelop } from 'react-icons/fa'
import { useRef, useState} from 'react';

export default function Navigation(): JSX.Element {

    const [isDown, setIsDown] = useState<boolean>(false)

    const nav = useRef<HTMLHeadingElement>(null);

    let lastScrollY = window.scrollY;
    

    
       window.addEventListener("scroll", () => {
            if(lastScrollY <= window.scrollY && lastScrollY !== 0) {
                setIsDown(true)
            } else {
                setIsDown(false)
            }
           
            lastScrollY = window.scrollY;
       });


    return (
        <nav ref={nav} className={`${style.nav} ${isDown ? style.navHidden : null}`}>

            <div className={style.left}>
              <FaConnectdevelop className={style.icon}/>
            </div>

            <div className={style.right}>
                <ol className={style.navOptions}>
                    <li className={style.option_1}><Link to="about" spy={true} smooth={true} duration={500} >About</Link></li>
                    <li className={style.option_2}><Link to="experience" spy={true} smooth={true} duration={500} >Experience</Link></li>
                    <li className={style.option_3}><Link to="projects" spy={true} smooth={true} duration={500} >Projects</Link></li>
                    <li className={style.option_4}><Link to="contact" spy={true} smooth={true} duration={500} >Contact</Link></li>
                </ol>
                <div className={style.buttonContainer}>
                    <NavLink to="/resume">Resume</NavLink>
                </div>
            </div>
        
        </nav>
    )
}