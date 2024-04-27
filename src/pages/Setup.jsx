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
    const handleValidation = () => {
        console.log(userGoal, userDiseases, height, age, weight);
        if (height.length > 0 && age.length > 0 && weight.length > 0 && userGoal.length > 0 && userDiseases.length > 0) {
            // navigate("/dashboard");
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost/Cavista Project/konsume/konsume/src/server/script.php',true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        let data = xhr.response;
                        // check if data is equal to true to tell if user sign in was sucessful
                        console.log(data);
                        if(data != true){
                            toast.error(data);      //throw an error if the sign in is not sucessful
                        }
                        else{
                            toast.success(data);   //send to dashboard page in sign in was sucessful
                            navigate(dashboard);
                        }
                    }
                }
            };
            xhr.onerror = function () {
                toast.error('Request failed. Network error');       // Handle error
            };
            xhr.send(`action=put_add_info&height=${height}&age=${age}&weight=${weight}&userGoal=${userGoal}&userDiseases=${userDiseases}`);
        } else {
            toast.error("Please complete all necessary form details")
        }
    }
    const navigate = useNavigate();
    return (
        <div className="w-10/12 m-auto">
            <div className="md:p-10 p-6">

                <img src={backbtn} alt="backbtn" />
                <Welcome />
                <BioData />
                <Goals />
                <HealthConditions />

                <div className="flex flex-col items-center gap-4">
                    <p className="text-[#8C77EC] font-bold ">Watch as you make progress towards your health goals!</p>
                    <button className="bg-[#8DCF38] px-[84px] py-[7px] text-[#1E5E08] rounded-[34px]" onClick={handleValidation}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Setup