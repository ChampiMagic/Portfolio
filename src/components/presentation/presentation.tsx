import style from "./presentation.module.css";

export default function Presentation(): JSX.Element {

    return (
        <div className={style.animeContainer}>
            <div className={style.stage}>
                <div className={style.wrapper}>
                    <div className={style.slash}></div>
                    <div className={style.sides}>
                    <div className={style.side}></div>
                    <div className={style.side}></div>
                    <div className={style.side}></div>
                    <div className={style.side}></div>
                    </div>
                    <div className={style.text}>
                    <div className={style.textBacking}>WELCOME</div>
                    <div className={style.textLeft}>
                        <div className={style.inner}>WELCOME</div>
                    </div>
                    <div className={style.textRight}>
                        <div className={style.inner}>WELCOME</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}