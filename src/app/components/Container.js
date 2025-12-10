
'use client'
import { useState } from 'react';


export default function Container () {
const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    email:"",
    date:"",
    phone:"",
    password:"",
    confirmpassword:"",
});

const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
};

const handleSubmit = (e) => {
    e.preventDefault(); // Page reload ruk jaye
    console.log("Form Data:", formData);
};

    return(
        <div className="flex justify-center items-center">
            <div className="bg-white h-[450px] w-[500px] p-4 rounded">
                <h1 className="text-2xl mb-5">Registration</h1>
                <div className="flex justify-between text-[14px] mb-4">
                    <div>
                        <span className="flex flex-col">
                 first name
                    <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInput}
                    className="border h-[28px] w-[220px] rounded-sm" placeholder="Enter your name" type="text" required/>    
                        </span>
                    </div>
                    {/* <div>
                        <span className="flex flex-col">
                 first name
                    <input
                    name="date"
                    value={formData.date}
                    onChange={handleInput}
                    className="border h-[28px] w-[220px] rounded-sm" placeholder="Enter your name" type="date" required/>    
                        </span>
                    </div> */}

                    <div>
                        <span className="flex flex-col">
                    last name
                    <input 
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleInput}
                    className="border h-[28px] w-[220px] rounded-sm" placeholder="Enter your username" type="text" required/>    
                </span>
                    </div>
                </div>

                <div className="flex justify-between text-[14px] mb-4">
                    <div>
                        <span className="flex flex-col">
                    Email
                    <input 
                    name='email'
                    value={formData.email}
                    onChange={handleInput}
                    className="border h-[28px] w-[220px] rounded-sm" placeholder="Enter your email" type="text" required/>    
                </span>
                    </div>

                <div>
                    <span className="flex flex-col">
                    Phone Number
                    <input
                    name='phone'
                    value={formData.phone}
                    onChange={handleInput}
                    className="border h-[28px] w-[220px] rounded-sm" placeholder="Enter your number" type="text" required/>    
                </span>
                </div>
                </div>

                <div className="flex justify-between text-[14px] mb-5">
                    <div>
                        <span className="flex flex-col">
                           
                    Password
                    <input
                    name='password'
                    value={formData.password}
                    onChange={handleInput}
                    className="border h-[28px] w-[220px] rounded-sm" placeholder="Enter your password" type="text" required/>    
                </span>
                    </div>

                <div>
                    <span className="flex flex-col">
                    Confirm Password
                    <input
                    name='confirmpassword'
                    value={formData.confirmpassword}
                    onChange={handleInput}
                    className="border h-[28px] w-[220px] rounded-sm" placeholder="Confirm your password " type="text" required/>    
                </span>
                </div>
                </div>

                <h1 className="mb-5">Gender</h1>
                <div className="flex gap-18 mb-10">
                    <span className="cursor-pointer">
                    <input className="cursor-pointer"   type="checkbox"/>Male
                    </span>

                    <span className="cursor-pointer">
                    <input className="cursor-pointer" type="checkbox"/>Female
                    </span>

                    <span className="cursor-pointer">
                    <input className="cursor-pointer" type="checkbox"/>Prefer not to say
                    </span>
                </div>


                

                <button onClick={handleSubmit} className="button w-full text-white h-[38px] rounded cursor-pointer">Register</button>
            </div>
        </div>
    );
}