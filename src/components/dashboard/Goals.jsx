import React from 'react'
import GoalCheckbox from './GoalCheckbox'
import stars from "../../assets/StarImg.png"

const Goals = () => {
    return (
        <div className="flex justify-between items-center">
            <div>

                <div className="font-jakarta">
                    <h1 className="text-2xl font-bold mt-4 ">We are excited to know you better</h1>
                    <p className="mb-4">Tell us what your goals for signing up are.</p>
                </div>
                <div className="flex flex-col gap-3">

                    <GoalCheckbox label="Lose Weight"/>
                    <GoalCheckbox label="Gain Weight" />
                    <GoalCheckbox label="Maintain Weight" />
                    <GoalCheckbox label="Start a fitness journey" />
                    <GoalCheckbox label="Improve Muscle tone" />
                    <GoalCheckbox label="Boost Energy Levels" />
                    <GoalCheckbox label="Manage Stress" />
                    <GoalCheckbox label="Improve Cardiovascular Health" />
                    <GoalCheckbox label="Just to Eat Healthy" />
                </div>
            </div>
            <img src={stars} alt="stars" />
        </div>
    )
}

export default Goals