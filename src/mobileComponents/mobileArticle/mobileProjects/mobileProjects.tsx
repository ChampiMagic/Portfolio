import style from './mobileProjects.module.css'

import {AiFillGithub} from 'react-icons/ai'
import {BsBoxArrowRight} from 'react-icons/bs'

export default function MobileProjects(): JSX.Element {

    const handleClick = (project: number): void => {
        if(project === 1) {
            window.location.href = "https://proyecto-pf.vercel.app/";
        } 
        else if(project === 2) {
            window.location.href = "https://pi-countries-cli.vercel.app/";
        }
    }


    return (
        <section id="projects" className={style.projects}>
             <div className={style.header}>
                <h2 className={style.number_heading}>A few Projects I create</h2>
                <div className={style.decoration_line}></div>
            </div>
            <div className={style.projects_container}>
                <div className={`${style.project} ${style.project_1}`}>
                    <h2>Code Lear</h2>
                    <p>A web app to learn web development in a practical way. Built with ReactJs, Redux, MongoDB and Express.</p>

                    <div>
                        <a className={style.github} href="https://github.com/ChampiMagic/CodeLearn"> <AiFillGithub /></a>
                        <a className={style.deploy} href="https://proyecto-pf.vercel.app/"> <BsBoxArrowRight /></a>
                    </div>    
                   
                </div>
                
                <div className={`${style.project} ${style.project_2}`}>
                    <h2>Countries App</h2>
                    <p>A web app which shows all the countries of the world allowing you to filter and sort them. It also allows you to create exclusive activities for each country. Built with ReactJS, Redux, Sequelize, Express.</p>

                    <div>
                        <a className={style.github} href="https://github.com/ChampiMagic/PI-Countries"> <AiFillGithub /></a>
                    </div> 
                </div>

                <div className={`${style.project} ${style.project_3}`}>
                    <h2>2Fast2Furious</h2>
                    <p>A desktop video game. Built with C# and Unity</p>

                    <div>
                        <a className={style.github} href="https://github.com/ChampiMagic/2Fast2Furious"> <AiFillGithub /></a>
                    </div> 
                </div>
            </div>

           
            
            
                        
        </section>
    )
}