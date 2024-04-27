import React, { useContext, useEffect, useState } from 'react';
import veg from "../../assets/veg.png"
import SetupContext from '../../context/SetupContext';
import { dashboardhero } from './dashboardhero';
import gemini from '../../https/gemini';
import { toast } from 'react-toastify';

const DashboardHead = () => {
    const {name, age, weight, userGoal, userDiseases } = useContext(SetupContext);
// const stringdisease = userDiseases.join(, )
    const qq = `My name is ${name} I am ${age} years old and ${weight}kg, I am working on ${userGoal}, my health conditons are ${userDiseases.join(', ')}. Please generate a three word diet for me e.g High protein diet`
    const [query, setQuery] = useState(qq);
  const [answer, setAnswer] = useState('');

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

    const textForUserGoal = dashboardhero
  .filter(({ title }) => title == userGoal) 
  .map(({ text }) => text);
  console.log(textForUserGoal);
  return (
    <div className='font-jakarta bg-[#BEFFA74F] p-5 mt-7 rounded-2xl'>
        <div className='flex justify-between'>

        <div className='flex flex-col gap-5'>
        <h1 className=' text-[#8C77EC] text-4xl font-bold'>Hello {name}</h1>
        <p className=' text-sm font-light'>Hello, {textForUserGoal}</p>
        <p className=' font-medium text-sm'><span className='text-[#1E5E08]'>Meal Plan:</span> <span className='text-[#FFC501]'>{answer}</span> </p>
        </div>
        <img src={veg} alt="veg" className='w-[250px]'/>
        </div>
    </div>
  )
}

export default DashboardHead