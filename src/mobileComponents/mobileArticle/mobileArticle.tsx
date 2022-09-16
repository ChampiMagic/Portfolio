import style from './mobileArticle.module.css'

import MobilePresentation from './mobilePresentation/mobilePresentation'
import MobileAbout from './mobileAbout/mobileAbout'


export default function MobileArticle(): JSX.Element {
    return (
        <div className={style.article}>
          
            <MobilePresentation />
            <MobileAbout />
        </div>
       
    )
}