import style from './article.module.css'

import Presentation from './presentation/presentation'
import About from './about/about'
import Experience from './experience/experience'
import Projects from './projects/projects'


export default function Article(): JSX.Element {
    return (
        <div className={style.article}>
          
            <Presentation />
            <About />
            <Experience />
            <Projects />
        </div>
       
    )
}