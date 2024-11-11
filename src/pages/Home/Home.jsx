import React from 'react'
import './Home.css'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Hero from '../../components/Hero/Hero'
const Home = () => {
  return (
    <div className='home-section' id='Home'>
        <NavigationBar></NavigationBar>
        <Hero></Hero>
    </div>
  )
}

export default Home