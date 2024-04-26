import React from 'react'
import GoalCheckbox from './GoalCheckbox'
import konsume from "../../assets/konsume.png"

const HealthConditions = () => {
    return (
        <div className="flex justify-between items-center mt-6 md:flex-row flex-col">
            <div>

                <div className="font-jakarta">
                    <h1 className="md:text-xl text-lg font-bold mt-4 ">Do you have any of these health conditions - Select all that applies.</h1>
                </div>
                <div className="flex flex-col gap-3">

                    <GoalCheckbox label="Diabetes" />
                    <GoalCheckbox label="Hypertension" />
                    <GoalCheckbox label="Food allergies" />
                    <GoalCheckbox label="Digestive issues" />
                    <GoalCheckbox label="Cholesterol management" />
                    <GoalCheckbox label="Vegetarian/vegan preferences" />
                    <GoalCheckbox label="Gluten sensitivity" />
                    <GoalCheckbox label="Lactose intolerance" />
                    <GoalCheckbox label="Nut allergies" />
                    <GoalCheckbox label="Fish and Shellfish allergies (Shrimps, Tuna, Salmon, Crab, e.t.c)" />
                    <GoalCheckbox label="Grain and Legume-Based Allergies (Wheat, Soy,  e.t.c)" />
                    <GoalCheckbox label="None" />
                </div>
            </div>
            <img src={konsume} alt="konsume" className='md:w-[270px] w-[200px]'/>
        </div>
    )
}

export default HealthConditions