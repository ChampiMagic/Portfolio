import style from './article.module.css'

import Presentation from './presentation/presentation'
import About from './about/about'
import Experience from './experience/experience'
import Projects from './projects/projects'
import Contact from './contact/contact'


export default function Article(): JSX.Element {
    return (
        <div className={style.article}>
          
            <Presentation />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
       
    )
}