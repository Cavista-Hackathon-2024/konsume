import React from 'react';
import veg from "../../assets/veg.png"

const DashboardHead = () => {
  return (
    <div className='font-jakarta bg-[#BEFFA74F] p-5 mt-7 rounded-2xl'>
        <div className='flex justify-between'>

        <div className='flex flex-col gap-5'>
        <h1 className=' text-[#8C77EC] text-4xl font-bold'>Hello Seyi</h1>
        <p className=' text-sm font-light'> Wishing you the best on your bodybuilding journey! We’re here to <br /> support you every step of the way. We've curated personalized <br /> recommendations on nutrition </p>
        <p className=' font-medium text-sm'><span className='text-[#1E5E08]'>Meal Plan:</span> <span className='text-[#FFC501]'>High-Protein Diet</span> </p>
        </div>
        <img src={veg} alt="veg" className='w-[250px]'/>
        </div>
    </div>
  )
}

export default DashboardHead