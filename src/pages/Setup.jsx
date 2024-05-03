import React, { useContext } from 'react'
import backbtn from "../assets/back_btn.png"
import Welcome from '../components/setup/Welcome'
import BioData from '../components/setup/BioData'
import Goals from '../components/setup/Goals'
import HealthConditions from '../components/setup/HealthConditions'
import SetupContext from '../context/SetupContext'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const Setup = () => {
    const { userGoal, setUserGoal, userDiseases, setUserDiseases, height, age, weight } = useContext(SetupContext);

    /**
     * function to handle the additional information
     */
    const navigate = useNavigate();
    const handleValidation = () => {
        // console.log(userGoal, userDiseases, height, age, weight);
        if (age.length > 0 && weight.length > 0 && userGoal.length > 0 && userDiseases.length > 0) {
            toast.success("Setup successful")
            navigate("/dashboard");
        }else{
            toast.error("Fill up the form")
        }
    }
    
    return (
        <div className="w-10/12 m-auto">
            <div className="md:p-10 p-3">

                <img src={backbtn} alt="backbtn" />
                <Welcome />
                <BioData />
                <Goals />
                <HealthConditions />

                <div className="flex flex-col items-center gap-4">
                    <p className="text-[#8C77EC] font-bold ">Watch as you make progress towards your health goals!</p>
                    {/* <button className="bg-[#8DCF38] px-[84px] py-[7px] text-[#1E5E08] rounded-[34px]" onClick={handleValidation}>Continue</button> */}
                    <button type="submit" className="md:py-[7px] py-1 md:px-[84px] px-2 bg-[#8DCF38] text-[#1E5E08] rounded-[34.71px] mx-auto w-fit flex" onClick={handleValidation}>Continue</button>

                </div>
            </div>
        </div>
    )
}

export default Setup