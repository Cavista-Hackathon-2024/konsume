import React from 'react'
import dashboard_img from "../../assets/dashboard_img.png"
import getUserData from './getUserData'

export var diseases = []         //initialise and export an empty array for the diseases so it can be accessed by the diseases component
const Welcome = () => {
    // console.log(getUserData());
    // console.log(getUserData()["name"]);
    let userFirstName = "" //getUserData()["name"].split(" ")[0];        //get the user first name by splitting the user name and retrieving the first name
    return (
        <div className=" relative gap-3 flex flex-col">
            <div className=" flex gap-3 mt-5 md:flex-row flex-col">
                <h1 className=" font-bold">Welcome {userFirstName}</h1>
                <p>Let's begin your personalized wellness Journey </p>
            </div>
            <div className="flex items-center justify-between">

                <div className="md:py-[19px] py-[9.5px] md:px-[44px] px-[22px] border-[3px] border-[#8C77EC] rounded-[3px]">
                    <p className=" text-xs md:font-bold">To get started, please tell us a bit about yourself.<br />
                        Your input will help us tailor recommendations just for you.</p>
                </div>

                <img src={dashboard_img} alt="dashboard" className="w-[50px] md:w-[150px] absolute md:relative top-0 right-0"/>
            </div>
        </div>
    )
}

export default Welcome