import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className=" h-[100vh]">
            <div className="md:p-10 p-6">
                <h1 className="md:text-3xl text-xl font-bold">Login to Konsume</h1>
                <p className='md:text-xl text-sm mb-10'>Please provide your information to login</p>
                <div className="imgg_container">
                    <div className="signup_img"></div>
                    <div className="signup_container md:p-[50px]">
                        <form className="signup_content grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2 md:gap-y-16 gap-y-7">
                            <div className="grid ">
                                <label htmlFor="email" className=" text-sm md:text-xl font-bold">Email</label>
                                <input type="text" placeholder="Email Address" id="email" className=" bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="grid ">
                                <label htmlFor="password" className=" text-sm md:text-xl font-bold">Password</label>
                                <input type="password" placeholder="Password" id="password" className=" bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </form>
                        <button type="submit" className="py-[7px] px-[84px] bg-[#8DCF38] rounded-[34.71px] mx-auto w-fit flex">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login