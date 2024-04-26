import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /**
     * function to authenticate the user
     */
    const authUser = (email, pwd) => {
        let xhr = new XMLHttpRequest(); // send an asynchronous xhttp request to the php file for backend processing
        xhr.open("POST", "http://localhost/Cavista Project/konsume/konsume/src/server/script.php", true);
        xhr.onload = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    let data = xhr.response; //assign response to variable
                    if (data == "db_err") {
                        console.log("db_err");
                    } else if (data == "null_mail") {
                        //send error for unexisting email
                        console.log("email does not exist")
                    } else if (data == "wrong_pwd") {
                        //send error for wrong password
                        console.log("Wrong password")
                    } else if (data == true) {
                        console.log("successful");
                    } else {
                        console.log("unexpected response"); //return unexpected response if the response is not recognised
                    }
                }
            }
        };
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send(`action=login&email=${email}&pwd=${pwd}`);
    }


    /**
     * Function to handle form submission
     */
    const handleSubmit = (event) => {
        event.preventDefault();

        // Call validateUser function with input values
        validateUser(email, password);
    };

    // Function to validate user inputs
    const validateUser = (email, password) => {
        // Access input values and perform validation

        let isThrough = true; //variable to check for potential errors while processing user data
        if (email.length < 1) {
            isThrough = false;
            console.log("please enter a valid email");
            //call error for no name
        }
        console.log(isThrough);

        if (isThrough) {
            authUser(email, password) //call the function to authenticate the user
        }

    };

    return (
        <div className=" h-[100vh]">
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
    )
}

export default Login;
