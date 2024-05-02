import React from 'react'
import HomeNav from '../components/home/HomeNav'
import HomeBody from '../components/home/HomeBody'

const Home = () => {
  return (
    <div className='font-jakarta md:bg-[white] bg-[#FFFFFF59] md:p-10 flex flex-col gap-10'>
        <HomeNav />
        <HomeBody />
    </div>
  )
}

export default Home