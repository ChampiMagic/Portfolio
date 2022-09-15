import { useState, useEffect } from 'react'
import style from './App.module.css'
import Navigation from './components/navigation/navigation'
import Article from './components/article/article'
import AsideLeft from './components/asides/asideLeft/asideLeft'
import AsideRight from './components/asides/asideRight/asideRight'

import StaticBackgroundParticles from './components/particles/StaticParticles'
import AnimatedBackgroundParticles from './components/particles/AnimatedParticle'


declare global {
  interface WindowEventMap {
    keydown: React.KeyboardEvent<HTMLInputElement>
  }
}


export default function App(): JSX.Element {

  const [ lightMode, setLightMode ] = useState<boolean>(false)
  
  const handleUserKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event
      if (key === "Enter") {
        if(lightMode){
          setLightMode(false)
          document.documentElement.style.setProperty('--onScreen', 'none');
          document.documentElement.style.setProperty('--onScreenPress', 'none');
        } else {
          setLightMode(true)
          document.documentElement.style.setProperty('--onScreen', 'initial');
          document.documentElement.style.setProperty('--onScreenPress', 'pointer');
        }        
      }
  }

  useEffect(() => {
    if(window.innerWidth > 600) {
      window.addEventListener('keydown', handleUserKeyPress)

      return () => {
        window.removeEventListener('keydown', handleUserKeyPress)
      }
    } else { setLightMode(true) }
   
  })

  return (
   <div className={style.body}>
      
      { lightMode? 
      <StaticBackgroundParticles />
      :
      <AnimatedBackgroundParticles />
      }
      
      <Navigation />
      <AsideLeft />
      <Article />
      <AsideRight />
   </div>
   
  )
}


