import style from './article.module.css'

import Presentation from './presentation/presentation'
import About from './about/about'


export default function Article(): JSX.Element {
    return (
        <div className={style.article}>
          
            <Presentation />
            <About />
            <section id="work" className={style.work}></section>
            <section id="experience" className={style.experience}></section>
            <section id="contact" className={style.constact}></section>
        </div>
       
    )
}