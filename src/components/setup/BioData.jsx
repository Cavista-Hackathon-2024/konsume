import React, { useContext, useState } from 'react';
import SetupContext from '../../context/SetupContext';

const BioData = () => {
    // State hooks for input values
    const {name,gender, age, weight} = useContext(SetupContext);

    // Function to log input values
    const logValues = () => {
        console.log('Name:', name);
        console.log('Age:', age);
        console.log('Gender:', gender);
        console.log('Weight:', weight);
    };

    return (
        <div className="mt-12">
            <div className="imgg_container">
                <div className="dash_img"></div>
                <div className="signup_container md:p-[50px]">
                    <form className="signup_content grid sm:grid-cols-2 grid-cols-1 md:gap-10 gap-2 md:gap-y-16 gap-y-7">
                        <div className="grid">
                            <label htmlFor="name" className="text-sm md:text-xl font-bold">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Name"
                                className="bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="grid">
                            <label htmlFor="age" className="text-sm md:text-xl font-bold">Age</label>
                            <input
                                type="number"
                                id="age"
                                placeholder="Age"
                                className="bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </div>
                        <div className="grid">
                            <label htmlFor="gender" className="text-sm md:text-xl font-bold">Gender</label>
                            <select
                                id="gender"
                                placeholder="Gender"
                                className="bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                            >
                            <option> Male </option>
                            <option> Female </option>
                            </select>
                        </div>
                        <div className="grid">
                            <label htmlFor="weight" className="text-sm md:text-xl font-bold">Weight</label>
                            <input
                                type="number"
                                id="weight"
                                placeholder="Weight"
                                className="bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>
                        <button type="button" onClick={logValues} className="py-[7px] px-[84px] bg-[#8DCF38] rounded-[34.71px] mx-auto w-fit flex">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BioData;
