import React, { useContext, useEffect, useState } from 'react'
import star from "../../assets/star2.png"
import star3 from "../../assets/star3.png"
import star4 from "../../assets/star4.png"
import scanner from "../../assets/scannerr.png"
import progress from "../../assets/progresss.png"
import gemini from '../../https/gemini'
import { toast } from 'react-toastify'
import SetupContext from '../../context/SetupContext'
import VanillaTilt from 'vanilla-tilt';
import { Link } from 'react-router-dom'

const DashboardBody = () => {
    const { name, age, weight, userGoal, userDiseases } = useContext(SetupContext);
    // const stringdisease = userDiseases.join(, )
    const qq = `My name is ${name} I am ${age} years old and ${weight}kg, I am working on ${userGoal}, my health conditons are ${userDiseases.join(', ')}. Please give me like 3 or more recommended food sources. Not more than 30 words`;
    const qq2 = `My name is ${name} I am ${age} years old and ${weight}kg, I am working on ${userGoal}, my health conditons are ${userDiseases.join(', ')}. Please give me like 3 or more types of food i should avoid. Not more than 30 words`;
    const proq = `My name is ${name} I am ${age} years old and ${weight}kg, I am working on ${userGoal}, my health conditons are ${userDiseases.join(', ')}. What is the recommended range of percent of protein i should eat, it must be exactly in this format i.e 30-45% do not include anything apart from the percentage`;
    const carbq = `My name is ${name} I am ${age} years old and ${weight}kg, I am working on ${userGoal}, my health conditons are ${userDiseases.join(', ')}. What is the recommended range of percent of fats i should eat, it must be exactly in this format i.e 30-45% do not include anything apart from the percentage`;
    const fatq = `My name is ${name} I am ${age} years old and ${weight}kg, I am working on ${userGoal}, my health conditons are ${userDiseases.join(', ')}. What is the recommended range of percent of carbs i should eat, it must be exactly in this format i.e 30-45% do not include anything apart from the percentage`;
    const [query, setQuery] = useState(qq);
    const [query2, setQuery2] = useState(qq2);
    const [query3, setQuery3] = useState(proq);
    const [query4, setQuery4] = useState(carbq);
    const [query5, setQuery5] = useState(fatq);

    const [answer, setAnswer] = useState();
    const [answer2, setAnswer2] = useState();

    const [proteinPercent, setProteinPercent] = useState();
    const [carbPercent, setCarbPercent] = useState();
    const [fats, setFats] = useState();
    useEffect(() => {
        makeRequest();
        makeRequestAvoidFood();
    }, [])

    const makeRequest = async () => {
        try {
            console.log('hii');
            const { data } = await gemini.post("/gemini-pro:generateContent", { "contents": [{ "parts": [{ "text": query }] }] })
            setAnswer(data.candidates[0].content.parts[0].text);
            console.log(data);
            console.log('done');
            console.log(query);
        } catch (error) {
            toast.error(error);
        }
    }
    const makeRequestAvoidFood = async () => {
        try {
            console.log('hii');
            const { data } = await gemini.post("/gemini-pro:generateContent", { "contents": [{ "parts": [{ "text": query2 }] }] });
            const protein = await gemini.post("/gemini-pro:generateContent", { "contents": [{ "parts": [{ "text": query3 }] }] });
            const carbs = await gemini.post("/gemini-pro:generateContent", { "contents": [{ "parts": [{ "text": query4 }] }] });
            const fats = await gemini.post("/gemini-pro:generateContent", { "contents": [{ "parts": [{ "text": query5 }] }] });
            setAnswer2(data.candidates[0].content.parts[0].text);
            setProteinPercent(protein?.data.candidates[0].content.parts[0].text);
            setCarbPercent(carbs?.data.candidates[0].content.parts[0].text);
            setFats(fats?.data.candidates[0].content.parts[0].text);
            console.log(data);
            console.log('done');
            console.log(query);
        } catch (error) {
            toast.error(error);
        }
    }



    const element = document.querySelectorAll(".js-tilt");
    VanillaTilt.init(element);
    return (
        <div className='grid grid-cols-3 gap-3'>
            <div className='grid grid-rows-2 gap-2'>
                <div className='bg-[#8C77EC] p-5 gap-2 flex flex-col rounded-2xl js-tilt'>
                    <div className='flex justify-between items-center'>
                        <p className=' font-bold text-xs text-white'>Foods to Consume <br />(Percentage of Daily Intake)</p>
                        <img src={star} alt="star" />
                    </div>
                    <div className='justify-between flex bg-[#D2E1F9] p-3 rounded-lg'>
                        <p className=' font-normal text-xs'>Protein</p>
                        <p className=' font-bold text-xs text-[#FFC501]'>{proteinPercent}</p>
                    </div>
                    <div className='justify-between flex bg-[#D2F9E8] p-3 rounded-lg'>
                        <p className=' font-normal text-xs'>Carbohydrates</p>
                        <p className=' font-bold text-xs text-[#FFC501]'>{carbPercent}</p>
                    </div>
                    <div className='justify-between flex bg-[#F7F9D2] p-3 rounded-lg'>
                        <p className=' font-normal text-xs'>Healthy Fats</p>
                        <p className=' font-bold text-xs text-[#FFC501]'>{fats}</p>
                    </div>
                </div>

                <div className='bg-[#8C77EC] p-5 gap-2 flex flex-col rounded-2xl js-tilt'>
                    <div className='flex justify-between items-center'>
                        <p className=' font-bold text-xs text-white'>Foods to Consume <br />(Percentage of Daily Intake)</p>
                        <img src={star} alt="star" />
                    </div>
                    <div className='justify-between flex bg-[#D2E1F9] p-3 rounded-lg'>
                        <p className=' font-normal text-xs'>Protein</p>
                        <p className=' font-bold text-xs text-[#FFC501]'>30-45%</p>
                    </div>
                    <div className='justify-between flex bg-[#D2F9E8] p-3 rounded-lg'>
                        <p className=' font-normal text-xs'>Carbohydrates</p>
                        <p className=' font-bold text-xs text-[#FFC501]'>30-45%</p>
                    </div>
                    <div className='justify-between flex bg-[#F7F9D2] p-3 rounded-lg'>
                        <p className=' font-normal text-xs'>Healthy Fats</p>
                        <p className=' font-bold text-xs text-[#FFC501]'>30-45%</p>
                    </div>
                </div>
            </div>

            <div className='grid grid-rows-2 gap-2 cursor-pointer'>
                <Link to="/scanner">
                    <div className='bg-[#B0D2C1] p-4 rounded-2xl js-tilt h-full'>
                        <div className='flex justify-between items-center mb-5'>
                            <p className=' font-bold text-xs text-[#ED5E3B]'>Try Out Scanner</p>
                            <img src={scanner} alt="scanner" />
                        </div>
                        <p>Upload a food picture, and our AI analyzes it for nutritional info, allergens, and health goal alignment.</p>
                    </div>
                </Link>

                <div className='border-[2px] border-[#FFC400] p-4 rounded-2xl js-tilt cursor-pointer'>
                    <div className='flex justify-between items-center mb-5'>
                        <p className=' font-bold text-base'>Progress Tracker</p>
                        <img src={progress} alt="progress" />
                    </div>
                    <p>Track your meals, goals and workout progress? <br />
                        Try out our Beta Project tracker coming Soon!</p>
                </div>
            </div>

            <div className='grid grid-rows-2 gap-2'>
                <div className='bg-[#D6FBC4] p-4 rounded-2xl js-tilt'>
                    <div className='flex justify-between items-center mb-5'>
                        <p className=' font-bold text-xs text-[#8C77EC]'>Recommended Food Sources</p>
                        <img src={star3} alt="star" />
                    </div>
                    <ul className=' text-xs font-medium text-[#286711]'>
                        {answer}
                    </ul>
                </div>

                <div className='bg-[#FF004D] p-4 rounded-2xl js-tilt'>
                    <div className='flex justify-between items-center mb-5'>
                        <p className=' font-bold text-xs'>Food to avoid</p>
                        <img src={star4} alt="star" />
                    </div>
                    <ul className=' text-xs font-medium'>
                        {answer2}
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default DashboardBody