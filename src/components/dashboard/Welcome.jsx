import React from 'react'
import dashboard_img from "../../assets/dashboard_img.png"

const Welcome = () => {
    return (
        <div>
            <div className=" flex gap-5 mt-5">
                <h1 className=" font-bold">Welcome Seyi</h1>
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