import style from './mobileNavigation.module.css'
import { Link } from 'react-scroll';
import { FaConnectdevelop, FaPhoenixFramework, FaCommentDots } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import { AiFillExclamationCircle } from 'react-icons/ai'
import { ImProfile } from 'react-icons/im'
import { IoShareSocial } from 'react-icons/io5'
import { GiPowerButton } from 'react-icons/gi'

import { useRef } from 'react';

export default function MobileNavigation(): JSX.Element {

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
        <nav className={style.nav}>

            <button onClick={onDisplay} className={style.left}>
               <FaConnectdevelop className={style.icon}/>
            </button>

            <div ref={options} className={style.options}>
                  <div className={style.navigateOptions}>
                          
                          
                          <Link to="about" spy={true} smooth={true} duration={500} offset={-80}>
                            <AiFillExclamationCircle className={style.optionIcon}/>
                            About
                          </Link>
                          
                          <Link to="experience" spy={true} smooth={true} duration={500} offset={-80}>
                            <FaPhoenixFramework className={style.optionIcon}/>
                            Experience
                          </Link>

                          <Link to="projects" spy={true} smooth={true} duration={500} offset={-80}>
                            <MdWork className={style.optionIcon}/>
                            Projects
                          </Link>

                          <Link to="contact" spy={true} smooth={true} duration={500} offset={-80}>
                            <FaCommentDots className={style.optionIcon}/>
                            Contact
                          </Link>

                          <Link to="footer" spy={true} smooth={true} duration={600}>
                            <IoShareSocial className={style.optionIcon}/>
                            Social Media
                          </Link>

                          <div className={style.buttonContainer}>
                             <ImProfile className={style.optionIcon} />
                             <a href="/resume.pdf">Resume</a>
                          </div>
                  </div>

                  <div className={style.dontPress}>
                    Don't Press The Button
                    <GiPowerButton className={style.dontPressIcon} onClick={() => alert("Why you do That...")}/>
                  </div>
                    
                    
                  
               </div>
               <div onClick={onHiding} ref={overlay} className={style.overlay}></div>

        </nav>
    )
}