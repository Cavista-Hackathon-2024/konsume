import React from 'react'

const SignUp = () => {
    return (
        <div className="bg-[#EDFAE7] font-[poppins] h-[100vh]">
            <div className="md:p-10 p-6">

                <h1 className="md:text-3xl text-xl font-bold">Sign Up to Konsum</h1>
                <p className='md:text-xl text-sm mb-10'>Please provide your information to create an account</p>
                <div className="imgg_container">
                    <div className="signup_img"></div>
                    <div className="signup_container md:p-[50px]">

                        <form action="" className="signup_content grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2 md:gap-y-16 gap-y-7">
                            <div className="grid ">
                                <label htmlFor="name" className=" text-sm md:text-xl font-bold">Name</label>
                                <input type="text" placeholder="Name" id="name" className=" bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none" />
                            </div>
                            <div className="grid ">
                                <label htmlFor="email" className=" text-sm md:text-xl font-bold">Email</label>
                                <input type="text" placeholder="Email Address" id="email" className=" bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none" />
                            </div>
                            <div className="grid ">
                                <label htmlFor="password" className=" text-sm md:text-xl font-bold">Password</label>
                                <input type="text" placeholder="Password" id="password" className=" bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none" />
                            </div>
                        </form>

                        <button className="py-[7px] px-[84px] bg-[#8DCF38] rounded-[34.71px] mx-auto w-fit flex">Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp