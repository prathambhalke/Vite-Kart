import { useContext } from 'react'
import { AppContext } from '../Context/Context'
import HeroSection from '../Home/HeroSection'
import "./about.css"



function About() {
  const data = "E-Commerce"
  const my = useContext(AppContext)
  return (
    <div className='Main-About'>
      {my}
      <HeroSection data = {data} />
    </div>
  )
}

export default About