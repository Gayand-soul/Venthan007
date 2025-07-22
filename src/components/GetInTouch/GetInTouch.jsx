
import React from 'react';
import { useState } from "react";
import emailjs from 'emailjs-com';


export const GetInTouch = () => {

     const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(import.meta.env.VITE_service_ID, import.meta.env.VITE_Template_ID, e.target, import.meta.env.VITE_Public_Key)
        .then(() => {
            alert("Message Sent!");
            setFormData({name: "", email:"", message:""});
        })
        .catch(() => alert ("OOps! Something went wrong. Please try again."))
    };


    return (
        <div className='min-h-screen block lg:flex lg:flex-row pl-0 md:pl-20 lg:pl-[300px]'>

            {/* INRE CONTENT-CONTAINER - MOBILANPASSNINGAR */}
            <div className='w-full px-4 sm:px-6 py-8 mt-[280px] lg:mt-0 overflow-auto'>

            <h2 className='text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 md:mb-12 text-center truncate px-2'>Get In Touch</h2>

            <form className='space-y-4 md:space-y-6 w-full lg:max-w-2xl mx-auto text-sm md:text-base' onSubmit={handleSubmit}>
                {/*.First name..*/}
                <div>
                    <label className='block text-left text-sm  md:text-base font-medium text-gray-700'>
                    First Name</label>
                    <input type='text' className='w-full mt-1 p-2 border md:p-2.5  border-gray-300 rounded text-sm md:text-base ' 
                    onChange={(e) => setFormData ({...formData, name: e.target.value })} required/>
                </div>

                 {/*.Last name..*/}
                <div>
                    <label className="block text-left text-sm  md:text-base font-medium text-gray-700">
                    Last Name</label>
                    <input type="text" className='w-full mt-1 p-2 border md:p-2.5  border-gray-300 rounded text-sm md:text-base'
                    onChange={(e) => setFormData ({...formData, name: e.target.value })} required/>
                </div>

                 {/*.Email address..*/}
                <div>
                    <label className="block text-left text-sm  md:text-base font-medium text-gray-700">
                    Email</label>
                    <input type="email"id="email" name='email' value={formData.email} className='w-full mt-1 p-2 border md:p-2.5  border-gray-300 rounded text-sm md:text-base' required/>
                </div>

                 {/*.Subject.*/}
                <div>
                    <label className="block text-left text-sm  md:text-base font-medium text-gray-700">
                    Subject</label>
                    <input type="text" className='w-full mt-1 p-2 border md:p-2.5  border-gray-300 rounded text-sm md:text-base' required/>
                </div>

                 {/*.Message.*/}
                <div className='relative'>
                    <textarea id="message" name="message" rows={6} value={FormData.message}
                    className='w-full border border-gray-300 rounded p-2 sm:p-3' 
                    onChange={(e) => setFormData ({...FormData, message: e.target.value})}/>
  
                </div>

                 {/*.Submit button.*/}
                <button type="submit" className="w-full 
                        bg-gray-900 
                        text-white 
                        py-2 md:py-3  /* MINDRE PADDING PÅ MOBIL */
                        px-4 md:px-6 
                        rounded 
                        font-medium 
                        transition 
                        hover:-translate-y-0.5 
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-sm md:text-base ">
                Send Message</button>

            </form>


            </div>

            
        </div>

    );
};

