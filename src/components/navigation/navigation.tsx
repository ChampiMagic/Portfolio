import style from './navigation.module.css'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { FaConnectdevelop } from 'react-icons/fa'
import { useRef, useState, useEffect} from 'react';

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

       

       const [ lightMode, setLightMode ] = useState<boolean>(false)
  

  const handleUserKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event
      if (key === "Enter") {
        if(lightMode){
          setLightMode(false)
        } else {
          setLightMode(true)
        }        
      }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
  })

    return (
        <nav ref={nav} className={`${style.nav} ${isDown ? style.navHidden : null}`}>

            <div className={style.left}>
              <FaConnectdevelop className={style.icon}/>
            </div>
            <h2 className={style.lightMode}>For {lightMode? "original" : "lite"} mode press "ENTER"</h2>

            <div className={style.right}>
                <ol className={style.navOptions}>
                    <li className={style.option_1}><Link to="about" spy={true} smooth={true} duration={500} >About</Link></li>
                    <li className={style.option_2}><Link to="experience" spy={true} smooth={true} duration={500} >Experience</Link></li>
                    <li className={style.option_3}><Link to="projects" spy={true} smooth={true} duration={500} >Projects</Link></li>
                    <li className={style.option_4}><Link to="contact" spy={true} smooth={true} duration={500} >Contact</Link></li>
                </ol>
                <div className={style.buttonContainer}>
                    <a href="/resume.pdf">Resume</a>
                </div>
            </div>
        
        </nav>
    )
}