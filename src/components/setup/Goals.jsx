import React from 'react'
import GoalCheckbox from './GoalCheckbox'
import stars from "../../assets/StarImg.png"

const Goals = () => {
    return (
        <div className="flex justify-between items-center">
            <div>

                <div className="font-jakarta">
                    <h1 className="md:text-2xl text-lg font-bold mt-4 ">We are excited to know you better</h1>
                    <p className="mb-4">Tell us what your goals for signing up are.</p>
                </div>
                <div className="flex flex-col md:gap-3 gap-1">

                    <GoalCheckbox label="Lose Weight" data= "lose_Weight"/>
                    <GoalCheckbox label="Gain Weight" data= "gain_Weight"/>
                    <GoalCheckbox label="Maintain Weight" data= "maintain_Weight"/>
                    <GoalCheckbox label="Start a fitness journey" data= "fitness"/>
                    <GoalCheckbox label="Improve Muscle tone" data= "muscle_tone"/>
                    <GoalCheckbox label="Boost Energy Levels" data= "boost_energy_level"/>
                    <GoalCheckbox label="Manage Stress" data= "manage_stress"/>
                    <GoalCheckbox label="Improve Cardiovascular Health" data= "cardio_health"/>
                    <GoalCheckbox label="Just to Eat Healthy" data= "eat_healthy"/>
                </div>
            </div>
            <img src={stars} alt="stars" className="md:block hidden"/>
        </div>
    )
}

export default Goals