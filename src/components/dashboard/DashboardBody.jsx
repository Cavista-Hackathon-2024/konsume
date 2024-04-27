import React from 'react'
import star from "../../assets/star2.png"
import star3 from "../../assets/star3.png"
import star4 from "../../assets/star4.png"

const DashboardBody = () => {
    return (
        <div className='grid grid-cols-3'>
            <div className='grid grid-rows-2 gap-2'>
                <div className='bg-[#8C77EC] p-5 gap-2 flex flex-col rounded-2xl'>
                    <div className='flex justify-between items-center'>
                        <p className=' font-bold text-xs text-white'>Foods to Consume <br />(Percentage of Daily Intake)</p>
                        <img src={star} alt="star" />
                    </div>
                    <div className='justify-between flex bg-[#D2E1F9] p-3 rounded-lg'>
                        <p className=' font-normal text-xs'>Protein</p>
                        <p className=' font-bold text-xs text-[#FFC501]'>30-45%</p>
                    </div>
                    <div className='justify-between flex bg-[#D2E1F9] p-3 rounded-lg'>
                        <p className=' font-normal text-xs'>Protein</p>
                        <p className=' font-bold text-xs text-[#FFC501]'>30-45%</p>
                    </div>
                    <div className='justify-between flex bg-[#D2E1F9] p-3 rounded-lg'>
                        <p className=' font-normal text-xs'>Protein</p>
                        <p className=' font-bold text-xs text-[#FFC501]'>30-45%</p>
                    </div>
                </div>

                <div className='bg-[#8C77EC] p-5 gap-2 flex flex-col rounded-2xl'>
                    <div className='flex justify-between items-center'>
                        <p className=' font-bold text-xs text-white'>Foods to Consume <br />(Percentage of Daily Intake)</p>
                        <img src={star} alt="star" />
                    </div>
                    <div className='justify-between flex bg-[#D2E1F9] p-3 rounded-lg'>
                        <p className=' font-normal text-xs'>Protein</p>
                        <p className=' font-bold text-xs text-[#FFC501]'>30-45%</p>
                    </div>
                    <div className='justify-between flex bg-[#D2E1F9] p-3 rounded-lg'>
                        <p className=' font-normal text-xs'>Protein</p>
                        <p className=' font-bold text-xs text-[#FFC501]'>30-45%</p>
                    </div>
                    <div className='justify-between flex bg-[#D2E1F9] p-3 rounded-lg'>
                        <p className=' font-normal text-xs'>Protein</p>
                        <p className=' font-bold text-xs text-[#FFC501]'>30-45%</p>
                    </div>
                </div>
            </div>
            <div>
                <button className='p-7'>Scan Image</button>
            </div>
            <div className='grid grid-rows-2 gap-2'>
                <div className='bg-[#D6FBC4] p-4 rounded-2xl'>
                    <div className='flex justify-between items-center mb-5'>
                        <p className=' font-bold text-xs text-[#8C77EC]'>Recommended Protein Sources</p>
                        <img src={star3} alt="star" />
                    </div>
                    <ul className=' text-xs font-medium'>
                        <li>Lean meats (chicken, turkey, fish)</li>
                        <li>Eggs</li>
                        <li>Dairy (if not lactose intolerant)</li>
                        <li>Plant-based proteins (tofu, lentils, beans)</li>
                    </ul>
                </div>

                <div className='bg-[#FF004D] p-4 rounded-2xl'>
                    <div className='flex justify-between items-center mb-5'>
                        <p className=' font-bold text-xs'>Foods to avoid</p>
                        <img src={star4} alt="star" />
                    </div>
                    <ul className=' text-xs font-medium'>
                        <li>Lean meats (chicken, turkey, fish)</li>
                        <li>Eggs</li>
                        <li>Dairy (if not lactose intolerant)</li>
                        <li>Plant-based proteins (tofu, lentils, beans)</li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default DashboardBody