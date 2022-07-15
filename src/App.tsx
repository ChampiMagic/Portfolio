import { useState } from 'react'
import style from './App.module.css'
import Presentation from './components/presentation/presentation'
import Navigation from './components/navigation/navigation'
import Article from './components/article/article'



export default function App(): JSX.Element {
 

  return (
   <div className={style.body}>
    <Navigation />
    <Article />
   </div>
   
  )
}


