import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        let isThrough = true;       //initialize a variablee to hold whether user passes authentication with a true boolean value

        // Validate user inputs
        if (email.trim().length < 1) {      // chek if user actually inputted email
            toast.error('Email is required.');  //assign false to the boolean value if no email is inputted
            isThrough  = false;
        }
        if (password.trim().length < 1) {         //check if user inputted password
            toast.error('Password is required.');       //assign false to the boolean value if no email is inputted
            isThrough = false;

        }

        // Call a function to validate user
        if(isThrough){
            validateUser(email, password);
        }
    }

    // Function to validate user credentials
    const validateUser = (email, password) => {
        //send asynchronous request to the php file
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost/Cavista Project/konsume/konsume/src/server/script.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    let data = xhr.response;
                    // check if data is equal to true to tell if user sign in was sucessful
                    console.log(data);
                    if(data != true){
                        toast.error(data);      //throw an error if the sign in is not sucessful
                        console.error(data);
                    }
                    else{
                        // navigate("/dashboard");     //send to dashboard page in sign in was sucessful
                    }
                }
            }
        };
        xhr.onerror = function () {
            toast.error('Request failed. Network error');       // Handle error
        };
        xhr.send(`action=login&email=${email}&pwd=${password}`);
    }

    return (
        <div className="h-[100vh]">
            <div className="md:p-10 p-6">
                <h1 className="md:text-3xl text-xl font-bold">Login to Konsume</h1>
                <p className='md:text-xl text-sm mb-10'>Please provide your information to login</p>
                <div className="imgg_container">
                    <div className="signup_img"></div>
                    <div className="signup_container md:p-[50px]">
                        <form onSubmit={handleSubmit} className="signup_content grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2 md:gap-y-16 gap-y-7">
                            <div className="grid ">
                                <label htmlFor="email" className=" text-sm md:text-xl font-bold">Email</label>
                                <input type="text" placeholder="Email Address" id="email" className=" bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="grid ">
                                <label htmlFor="password" className=" text-sm md:text-xl font-bold">Password</label>
                                <input type="password" placeholder="Password" id="password" className=" bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="py-[7px] px-[84px] bg-[#8DCF38] rounded-[34.71px] mx-auto w-fit flex">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
