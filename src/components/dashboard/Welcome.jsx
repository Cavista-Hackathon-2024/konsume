import React from 'react'
import dashboard_img from "../../assets/dashboard_img.png"
import getUserData from './getUserData'

export var diseases = []         //initialise and export an empty array for the diseases so it can be accessed by the diseases component
const Welcome = () => {
    let userFirstName = getUserData()["name"].split(" ")[0];        //get the user first name by splitting the user name and retrieving the first name
    return (

        <div>
            <div className=" flex gap-5 mt-5">
                <h1 className=" font-bold">Welcome {userFirstName}</h1>
                <p>Let's begin your personalized wellness Journey </p>
            </div>
            <div className="flex items-center justify-between">

                <div className="py-[19px] px-[44px] border-[3px] border-[#8C77EC] rounded-[3px]">
                    <p className=" font-bold">To get started, please tell us a bit about yourself.<br />
                        Your input will help us tailor recommendations just for you.</p>
                </div>

                <img src={dashboard_img} alt="dashboard" />
            </div>
        </div>
    )
}

export default Welcome