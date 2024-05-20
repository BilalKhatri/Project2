import React from 'react'
import Homebanner from '../Component/HomeBanner'
import OurFeaturedServices from '../Component/OurFeaturedServices'
import HomeAbout from '../Component/HomeAbout'
import AdvanceFeature from '../Component/AdvanceFeature'
import PowerfulSolution from '../Component/PowerfulSolution'
import WhoSays from '../Component/WhoSays'
import Logos from '../Component/Trusted'
import YourDream from '../Component/YourDream'


const Home = () => {
  return (
    <>
      <Homebanner/>
      <OurFeaturedServices heading="Our Featured Services" paragraph="If you require help with graphic design, logo design, web design, or any other design projects, we are available to assist you."/>
      <HomeAbout/>
      <AdvanceFeature/>
      <PowerfulSolution/>
      <WhoSays/>
      <Logos/>
      <YourDream/>
    </>
  )
}

export default Home
