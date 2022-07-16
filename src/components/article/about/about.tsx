import style from './about.module.css'

export default function About(): JSX.Element {
    return (
        <section id="about" className={style.about}>
            <div className={style.header}>
                <h2 className={style.number_heading}>About Me</h2>
                <div className={style.decoration_line}></div>
            </div>
            <div className={style.description_container}>
                <div className={style.description}>
                    <p>
                    Hi! My name is Homero and I'm a technologist that loves creating things in this virtual world. My interest in programming started back in 2019 (I was 15 years old) when I decide to created a videogame with Unity and C#. Thats  taught me a lot of about programming fundaments.
                    </p>
                    <p>
                    Fast-forward to today, I'm a recently gradueted as Full Stack Developer looking for experience and people who are very enthusiastic about this world as much as I am.
                    </p>

                    <div className={style.listContainer}>
                        <p>Here are a few technologies I’ve been working with recently:</p>
                        <ul className={style.list}>
                            <li>JavaScript(ES6+)</li>
                            <li>Typescript</li>
                            <li>ReactJS</li>
                            <li>Redux</li>
                            <li>MongoDB</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    
                </div>
                <div className={style.img_container}>
                    <img src="profile.jpg" alt="Homero Gazze"/>
                </div>
            </div>
           
            
        </section>
    )
}