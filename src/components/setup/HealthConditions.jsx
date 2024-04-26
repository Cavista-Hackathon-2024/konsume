import React from 'react'
import GoalCheckbox from './GoalCheckbox'
import konsume from "../../assets/konsume.png"
import HealthCheckboxes from './HealthCheckboxes'

const HealthConditions = () => {
    return (
        <div className="flex justify-between items-center mt-6 md:flex-row flex-col">
            <div>

                <div className="font-jakarta">
                    <h1 className="md:text-xl text-lg font-bold mt-4 ">Do you have any of these health conditions - Select all that applies.</h1>
                </div>
                <div className="flex flex-col gap-3">

                    <HealthCheckboxes label="Diabetes" />
                    <HealthCheckboxes label="Hypertension" />
                    <HealthCheckboxes label="Food allergies" />
                    <HealthCheckboxes label="Digestive issues" />
                    <HealthCheckboxes label="Cholesterol management" />
                    <HealthCheckboxes label="Vegetarian/vegan preferences" />
                    <HealthCheckboxes label="Gluten sensitivity" />
                    <HealthCheckboxes label="Lactose intolerance" />
                    <HealthCheckboxes label="Nut allergies" />
                    <HealthCheckboxes label="Fish and Shellfish allergies (Shrimps, Tuna, Salmon, Crab, e.t.c)" />
                    <HealthCheckboxes label="Grain and Legume-Based Allergies (Wheat, Soy,  e.t.c)" />
                    <HealthCheckboxes label="None" />
                </div>
            </div>
            <img src={konsume} alt="konsume" className='md:w-[270px] w-[200px]'/>
        </div>
    )
}

export default HealthConditions