import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import konsumeapi from '../https/konsumeapi';
import { auth } from '../../firebase';
import Cookies from "js-cookie"

const SignUp = () => {
    // State variables to store input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // const handleSubmit = async () => {
    //     if (!validateEmail(email)) {
    //         toast.error("Invalid Email");
    //         return;
    //     }
    //     await konsumeapi.post("/Profile/create-customer", {
    //         email: email,
    //         password: password
    //     }).then(
    //         ({data}) => {
    //             toast.success('Signup Successful!');
    //             navigate('/dashboard');
    //             console.log(data);
    //         })
    //         .catch((error) => {
    //             toast.error(error.message);
    //             console.log(error);
    //         })
    // }

    const handleSubmitt = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            toast.error("Invalid Email");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log(user);
                        const { accessToken, refreshToken } = user.stsTokenManager;
                        Cookies.set('accessToken', accessToken);
                        Cookies.set('refreshToken', refreshToken);
                        const auth = getAuth();
                        const userr = auth.currentUser;
                        updateProfile(auth.currentUser, {
                                displayName: name
                        }).then(() => {
                                setAuthUser(userr);
                                console.log(userr);

                        })
                        toast.success("Account created successfully!")
                        navigate('/setup');
                })
                .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        toast.error(errorMessage)
                        console.log(errorCode, errorMessage);
                });
}

    return (
        <div className="h-[100vh]">
            <div className="md:p-10 p-2">
                <h1 className="md:text-3xl text-xl font-bold">Sign Up to Konsume</h1>
                <p className="md:text-xl text-sm mb-10">Please provide your information to create an account</p>
                <div className="imgg_container">
                    <div className="signup_img"></div>
                    <div className="signup_container md:p-[50px]">
                        <form onSubmit={handleSubmitt} className="signup_content md:p-[20px] grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-2 md:gap-y-16 gap-y-7">
                            <div className="grid mx-auto">
                                <label htmlFor="name" className="text-sm md:text-xl font-bold">Name</label>
                                <input type="text" placeholder="Name" id="name" className="bg-[#D6FBC4] p-2 text-sm md:text-lg  md:p-6 rounded-full outline-none" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="grid mx-auto">
                                <label htmlFor="email" className="text-sm md:text-xl font-bold">Email</label>
                                <input type="text" placeholder="Email Address" id="email" className="bg-[#D6FBC4] text-sm md:text-lg p-2 md:p-6 rounded-full outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="grid mx-auto">
                                <label htmlFor="password" className="text-sm md:text-xl font-bold">Password</label>
                                <input type="password" placeholder="Password" id="password" className="bg-[#D6FBC4] p-2  text-sm md:text-lg  md:p-6 rounded-full outline-none" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </form>
                        <button type="submit" className="md:py-[7px] py-1 md:px-[84px] px-2 bg-[#8DCF38] rounded-[34.71px] mx-auto w-fit flex" onClick={handleSubmitt}>Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;