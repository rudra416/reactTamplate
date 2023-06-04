import React from 'react'
import Topbar from '../../Component/Topbar/Topbar'
import Header from '../../Component/Header/Header'
import Banner from '../../Component/Banner/Banner'
import Section from '../../Component/Section/Section'
import Footer from '../../Component/Footer/Footer'

const Home = () => {
  return (
    <div>
        <div className='main-header'>
            <Topbar/>
            <Header/>
        </div>
        <Banner />
        <Section/>
        <Footer/>
    </div>
  )
}

export default Home