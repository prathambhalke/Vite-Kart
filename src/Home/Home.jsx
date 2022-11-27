import React from 'react'
import HeroSection from "../Home/HeroSection"
import Services from '../Component/Services/Services'
import Trusted from '../Component/Trusted/Trusted'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
function Home() {
  const data = "Kart"
  return (
    <div>
      <HeroSection data={data}/>
      <FeaturedProducts />
      <Services />
      <Trusted />
    </div>
  )
}

export default Home
