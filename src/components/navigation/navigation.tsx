import style from './navigation.module.css'
import { NavLink } from 'react-router-dom';
import { FaConnectdevelop } from 'react-icons/fa'
import { useRef, useLayoutEffect } from 'react';

export default function Navigation(): JSX.Element {

    const h1Ref = useRef<HTMLHeadingElement>(null);

    
    console.log(h1Ref) // { current: null }

    useLayoutEffect(() => {
        console.log(h1Ref); // { current: <h1_object> }
    })

    return (
        <nav ref={h1Ref} className={style.nav}>

            <div className={style.left}>
              <FaConnectdevelop className={style.icon}/>
            </div>

            <div className={style.right}>
                <ol className={style.navOptions}>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ol>
                <div className={style.buttonContainer}>
                    <NavLink to="/resume">Resume</NavLink>
                </div>
            </div>
        
        </nav>
    )
}