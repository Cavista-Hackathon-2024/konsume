import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    // State variables to store input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // Function to balidate email
    const isValidEmail = (email) => {
        // Regular expression pattern for validating email addresses
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Function to create account
    const createAccount = (name,email,password) => {

        //send asynchronous request to the php file
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost/Cavista Project/konsume/konsume/src/server/script.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    let data = xhr.response;
                    // check if data is equal to true to telll if user sign up was sucessful
                    if(data != true){
                        toast.error(data);      //throw an error if the sign up is not sucessful
                        console.error(data);
                    }
                    else{
                        navigate("/setup");     //send to dashboard page if sign up was sucessful
                    }
                }
            }
        };
        xhr.onerror = function () {
            toast.error('Request failed. Network error');
            // Handle error
        };
        xhr.send(`action=signup&name=${name}&email=${email}&pwd=${password}`);
    }

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        let isThrough = true;
        // Validate user inputs
        if (name.length === 0) {
            toast.error('Name is required.');
            isThrough = false;
        }
        if (!isValidEmail(email)) {
            toast.error('Invalid email.');
            isThrough = false;
        }
        if (password.length < 4) {
            toast.error('Password must be at least 4 characters.');
            isThrough = false;
        }
        if(isThrough) validateUser(name,email,password)
    }
    // Function to validate user inputs
    const validateUser = (name, email, password) => {
        // Access input values and perform validation

        let isThrough = true; //variable to check for potential erros while processing user data
        if(name.length < 1){
            isThrough = false;
            //call error for no name
        }
        if(!isValidEmail(email)){
            isThrough = false;
            toast.error("Invalid email address");
            //call error for invalid email-
        }
        if(password.length < 4){
            isThrough = false;
            toast.error("Password must be 4 characters or longer");
            //call error and tell user that password is must be more than 4 characters
        }
        console.log(isThrough);

        if(isThrough){
            createAccount(name,email,password); 
        }
        
    };

    return (
        <div className="h-[100vh]">
            <div className="md:p-10 p-6">
                <h1 className="md:text-3xl text-xl font-bold">Sign Up to Konsume</h1>
                <p className="md:text-xl text-sm mb-10">Please provide your information to create an account</p>
                <div className="imgg_container">
                    <div className="signup_img"></div>
                    <div className="signup_container md:p-[50px]">
                        <form onSubmit={handleSubmit} className="signup_content grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2 md:gap-y-16 gap-y-7">
                            <div className="grid">
                                <label htmlFor="name" className="text-sm md:text-xl font-bold">Name</label>
                                <input type="text" placeholder="Name" id="name" className="bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="grid">
                                <label htmlFor="email" className="text-sm md:text-xl font-bold">Email</label>
                                <input type="text" placeholder="Email Address" id="email" className="bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="grid">
                                <label htmlFor="password" className="text-sm md:text-xl font-bold">Password</label>
                                <input type="password" placeholder="Password" id="password" className="bg-[#D6FBC4] p-3 md:p-6 rounded-full outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="py-[7px] px-[84px] bg-[#8DCF38] rounded-[34.71px] mx-auto w-fit flex">Join Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;