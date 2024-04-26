import React from 'react'
import backbtn from "../assets/back_btn.png"
import Welcome from '../components/setup/Welcome'
import BioData from '../components/setup/BioData'
import Goals from '../components/setup/Goals'
import HealthConditions from '../components/setup/HealthConditions'

const Setup = () => {
    return (
        <div className="w-10/12 m-auto">
            <div className="md:p-10 p-6">

                <img src={backbtn} alt="backbtn" />
                <Welcome />
                <BioData />
                <Goals />
                <HealthConditions />

                <div className="flex flex-col items-center gap-4">
                    <p className="text-[#8C77EC] font-bold ">Watch as you make progress towards your health goals!"</p>
                    <button className="bg-[#8DCF38] px-[84px] py-[7px] text-[#1E5E08] rounded-[34px]">Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Setup