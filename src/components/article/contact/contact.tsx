import style from './contact.module.css'

export default function Contact(): JSX.Element {
    return (
        <section id="contact" className={style.about}>
            <div className={style.header}>
                <h2 className={style.number_heading}>Want to know more about me?</h2>
                <div className={style.decoration_line}></div>
            </div>
            <div className={style.description_container}>
                <h2 className={style.title}>Get In Touch</h2>
                <a className={style.email_link} href="mailto:homerogazze1015@gmail.com" rel="noopener noreferrer" target="_blank">WRITE ME!</a>
            </div>
           
            
        </section>
    )
}