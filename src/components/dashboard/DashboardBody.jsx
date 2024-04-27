import React, { useContext, useEffect, useState } from 'react'
import star from "../../assets/star2.png"
import star3 from "../../assets/star3.png"
import star4 from "../../assets/star4.png"
import gemini from '../../https/gemini'
import { toast } from 'react-toastify'
import SetupContext from '../../context/SetupContext'

const DashboardBody = () => {
    const {name, age, weight, userGoal, userDiseases } = useContext(SetupContext);
    // const stringdisease = userDiseases.join(, )
    const qq = `My name is ${name} I am ${age} years old and ${weight}kg, I am working on ${userGoal}, my health conditons are ${userDiseases.join(', ')}. Please give me like 3 or more recommended protein sources`;
    const [query, setQuery] = useState(qq);
    const [answer, setAnswer] = useState();
    useEffect(() => {
        makeRequest();
      }, [])
    
      const makeRequest = async () => {
        try {
          console.log('hii');
          const {data} = await gemini.post("/gemini-pro:generateContent", {"contents":[{"parts":[{"text": query}]}]})
          setAnswer(data.candidates[0].content.parts[0].text);
          console.log(data);
          console.log('done');
          console.log(query);
        } catch (error) {
          toast.error(error);
        }
      }
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
                        {answer}
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default DashboardBody