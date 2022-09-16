import style from './mobileExperience.module.css'

import { GiDistressSignal } from 'react-icons/gi'

export default function MobileExperience(): JSX.Element {
    return (
        <section id="experience" className={style.experience}>
            <div className={style.header}>
                <h2 className={style.number_heading}>Where I’ve Worked</h2>
                <div className={style.decoration_line}></div>
            </div>
            <div className={style.description_container}>
                <h2 className={style.not_found}>404 Not Found</h2>
                <h2 className={style.not_found}>I'm working on that</h2>
            </div>
           
            <GiDistressSignal className={style.icon} />
        </section>
    )
}