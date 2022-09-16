import style from './mobileNavigation.module.css'
import { Link } from 'react-scroll';
import { FaConnectdevelop, FaPhoenixFramework } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { GrContact } from 'react-icons/gr'
import { AiFillExclamationCircle } from 'react-icons/ai'
import { ImProfile } from 'react-icons/im'
import { useRef, useState, useEffect} from 'react';

export default function MobileNavigation(): JSX.Element {

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


    const options = useRef<HTMLDivElement>(null);
    const overlay = useRef<HTMLDivElement>(null);

    const onDisplay = () => {

      if(options.current && overlay.current) {
        options.current.style.transform = "translateX(0)";
        overlay.current.style.visibility = "visible";
        overlay.current.style.opacity = "1";
      }
      
    }

    const onHiding = () => {

      if(options.current && overlay.current) {
        options.current.style.transform = "translateX(-250px)";
        overlay.current.style.visibility = "hidden";
        overlay.current.style.opacity = "0";
      }
      
    }
    

    return (
        <nav ref={nav} className={`${style.nav} ${isDown ? style.navHidden : null}`}>

            <button onClick={onDisplay} className={style.left}>
               <FaConnectdevelop className={style.icon}/>
            </button>

            <div ref={options} className={style.options}>
                <div className={style.navigateOptions}>
                        <div className={style.option_1}>
                          <AiFillExclamationCircle className={style.optionIcon}/>
                          <Link to="about" spy={true} smooth={true} duration={500} >About</Link>
                        </div>
                        <div className={style.option_2}>
                          <FaPhoenixFramework className={style.optionIcon} />
                          <Link to="experience" spy={true} smooth={true} duration={500} >Experience</Link>
                        </div>
                        <div className={style.option_3}>
                          <MdWork className={style.optionIcon} />
                          <Link to="projects" spy={true} smooth={true} duration={500} >Projects</Link>
                        </div>
                        <div className={style.option_4}>
                          <GrContact className={style.optionIcon} />
                          <Link to="contact" spy={true} smooth={true} duration={500} >Contact</Link>
                        </div>
                </div>

                <div className={style.buttonContainer}>
                    <ImProfile className={style.optionIcon} />
                    <a href="/resume.pdf">Resume</a>
                </div>
               </div>
               <div onClick={onHiding} ref={overlay} className={style.overlay}></div>

        </nav>
    )
}