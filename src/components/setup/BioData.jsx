import React from 'react'

const BioData = () => {
    return (
        <div className="mt-12">
            <div className="imgg_container">
                <div className="dash_img"></div>
                <div className="signup_container md:p-[50px]">
                    <form action="" className="signup_content grid sm:grid-cols-2 grid-cols-1 md:gap-10 gap-2 md:gap-y-16 gap-y-7">
                        <div className="grid ">
                            <label htmlFor="name" className=" text-sm md:text-xl font-bold">Name</label>
                            <input type="text" placeholder="Name" id="name" className=" bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none" />
                        </div>
                        <div className="grid ">
                            <label htmlFor="age" className=" text-sm md:text-xl font-bold">Age</label>
                            <input type="text" placeholder="Age" id="age" className=" bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none" />
                        </div>
                        <div className="grid ">
                            <label htmlFor="gender" className=" text-sm md:text-xl font-bold">Gender</label>
                            <input type="text" placeholder="Gender" id="gender" className=" bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none" />
                        </div>
                        <div className="grid ">
                            <label htmlFor="gender" className=" text-sm md:text-xl font-bold">Weight</label>
                            <input type="text" placeholder="Weight" id="gender" className=" bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BioData