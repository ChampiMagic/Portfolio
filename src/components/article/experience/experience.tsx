import style from './experience.module.css'

export default function Experience(): JSX.Element {
    return (
        <section id="experience" className={style.about}>
            <div className={style.header}>
                <h2 className={style.number_heading}>Where I’ve Worked</h2>
                <div className={style.decoration_line}></div>
            </div>
            <div className={style.description_container}>
                <h2 className={style.not_found}>404 Not Found</h2>
                <h2 className={style.not_found}>I'm working on that</h2>
            </div>
           
            
        </section>
    )
}