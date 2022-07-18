import style from './projects.module.css'

export default function Projects(): JSX.Element {

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
                <div className={`${style.projects_card} ${style.projects_card_1} ${style.project_one}`} onClick={() => handleClick(1)}>
                        <div className={style.project_info_container}>
                            <h3 className={style.project_title}>CodeLearn</h3>  
                            <span className={style.project_load_bar}></span>
                            <p className={style.project_short_desc_1}>A web app to learn web development in a practical way. Built with ReactJs, Redux, MongoDB and Express.</p> 
                            <button className={style.project_btn}> <a href="https://github.com/ChampiMagic/CodeLearn">Go to repository</a> </button>
                            <p className={style.project_short_desc_1}>Or click Anywhere to go to the app</p>
                        </div>
                </div>
                <div className={`${style.projects_card} ${style.projects_card_2} ${style.project_one}`} onClick={() => handleClick(2)}>
                        <div className={style.project_info_container}>
                            <h3 className={style.project_title}>Countries App</h3>  
                            <span className={style.project_load_bar}></span>
                            <p className={style.project_short_desc_2}>A web app which shows all the countries of the world allowing you to filter and sort them. It also allows you to create exclusive activities for each country. Built with ReactJS, Redux, Sequelize, Express.</p> 
                            <button className={style.project_btn}> <a href="https://github.com/ChampiMagic/PI-Countries">Go to repository</a> </button>
                            <p className={style.project_short_desc_1}>Or click Anywhere to go to the app</p>
                        </div>
                </div>
                <div className={`${style.projects_card} ${style.projects_card_3} ${style.project_one}`}>
                        <div className={style.project_info_container}>
                            <h3 className={style.project_title}>2Fast2Furious</h3>  
                            <span className={style.project_load_bar}></span>
                            <p className={style.project_short_desc_3}>A desktop video game. Built with C# and Unity</p> 
                            <button className={style.project_btn}> <a href="https://github.com/ChampiMagic/2Fast2Furious">Go to repository</a> </button>
                        </div>
                </div>
            </div>
            
                        
        </section>
    )
}