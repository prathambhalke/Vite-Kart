import React from 'react'
import HeroSection from "../Home/HeroSection"
import Services from '../Component/Services/Services'
import Trusted from '../Component/Trusted/Trusted'
function Home() {
  const data = "Kart"
  return (
    <div>
      <HeroSection data={data}/>
      <Services />
      <Trusted />
    </div>
  )
}

export default Home
