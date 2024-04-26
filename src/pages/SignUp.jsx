import React, { useState } from 'react';

const SignUp = () => {
    // State variables to store input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to validate email
    const isValidEmail = (email) => {
        // Regular expression pattern for validating email addresses
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Function to create account
    const createAccount = () => {
        // Send request to backend
        // You can use Fetch API or Axios for sending HTTP requests
        // Example using Fetch API:
        fetch('http://localhost/Cavista Project/konsume/konsume/src/server/script.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `action=signup&name=${name}&email=${email}&pwd=${password}`,
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            // Handle response from backend
            // You can update state or show a message to the user based on the response
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error
        });
    }

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate user inputs
        if (name.length === 0) {
            console.log('Name is required.');
            return;
        }
        if (!isValidEmail(email)) {
            console.log('Invalid email.');
            return;
        }
        if (password.length < 4) {
            console.log('Password must be at least 4 characters.');
            return;
        }

        // If inputs are valid, create account
        createAccount();
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
