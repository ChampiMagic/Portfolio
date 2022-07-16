import style from './presentation.module.css'

export default function Presentation(): JSX.Element {
    return (
        <section id="presentation" className={style.presentation}>
        <div className={style.middleContainer}>
            <div className={style.content}>
                <div className={style.content__container}>

                    <p className={style.content__container__text}>
                    Welcome
                    </p>
                    
                    <ul className={style.content__container__list}>
                        <li className={style.content__container__list__item}>User !</li>
                        <li className={style.content__container__list__item}>Friend !</li>
                        <li className={style.content__container__list__item}>Hacker !</li>
                        <li className={style.content__container__list__item}>Everyone !</li>
                    </ul>

                 
                </div>
            </div>
        </div>
        <div className={style.textContainer}>
            <h1>I am Homero Gazze.</h1>
            <h2>A creator of virtual worlds</h2>
            <p>I'm a Full Stack web developer as well as a video game developer and entrepreneur of 18 years old (currently). I'm passionate about technology, with a keen interest in helping others and leading the future.</p>
        </div>
        
        

    </section>
    )
}