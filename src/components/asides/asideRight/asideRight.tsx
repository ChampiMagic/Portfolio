import style from './asideRight.module.css'

export default function AsideRight(): JSX.Element {
    return (
        <aside className={style.asideRight}>
            <div className={style.iconsContainer}>
                <p className={style.K}>K</p>
                <p className={style.A}>A</p>
                <p className={style.I}>I</p>
                <p className={style.Z}>Z</p>
                <p className={style.E}>E</p>
                <p className={style.N}>N</p>
            </div>
           
            <div className={style.decoration}></div>
        </aside>
    )
}