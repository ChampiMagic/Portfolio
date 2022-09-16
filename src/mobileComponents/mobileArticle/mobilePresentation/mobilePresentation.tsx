import style from './mobilePresentation.module.css'

export default function MobilePresentation(): JSX.Element {
    return (
        <section id="presentation" className={style.presentation}>
        <div className={style.textContainer}>
            <h1>I am Homero Gazze.</h1>
            <h2>A creator of virtual worlds</h2>
            <p>I'm a Full Stack web developer as well as a video game developer and entrepreneur of 18 years old (currently). I'm passionate about technology, with a keen interest in helping others and leading the future.</p>
        </div>
        
        

    </section>
    )
}