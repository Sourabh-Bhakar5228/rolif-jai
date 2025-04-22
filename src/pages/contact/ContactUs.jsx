import React from 'react';
import { Title } from 'react-head';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        alert('Form submitted successfully!');
    };

    return <>
        <Title>Contact Us</Title>
        <img src="/banners/contact.png" alt='image' className='w-full' />

        <main className="container mx-auto px-4 py-4 flex flex-col md:flex-row gap-8">
            {/* Contact Form */}
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } })}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            id="phone"
                            type="tel"
                            className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            {...register('phone', {
                                required: 'Phone number is required',
                                pattern: { value: /^\+?[\d\s()-]{7,}$/, message: 'Invalid phone number' },
                                minLength: { value: 7, message: 'Phone number must be at least 7 digits' }
                            })}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                        <input
                            id="company"
                            type="text"
                            className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            {...register('company', {
                                required: 'Company name is required',
                                minLength: { value: 2, message: 'Company name must be at least 2 characters' }
                            })}
                        />
                        {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Contact Details & Company Info */}
            <div className="md:w-1/2 space-y-8">
                {/* Contact Details in Cards */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-md shadow-sm flex items-start space-x-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <div>
                                <h3 className="text-lg font-medium">Email</h3>
                                <p className="text-gray-600">info@company.com</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md shadow-sm flex items-start space-x-4">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <div>
                                <h3 className="text-lg font-medium">Phone</h3>
                                <p className="text-gray-600">+1 (123) 456-7890</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md shadow-sm flex items-start space-x-4 sm:col-span-2">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <div>
                                <h3 className="text-lg font-medium">Address</h3>
                                <p className="text-gray-600">123 Business Ave, Suite 100<br />City, State 12345, USA</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
                    <div className="w-full h-64">
                        <iframe
                            className="w-full h-full rounded-md"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019399663917!2d-122.41941568468145!3d37.77492977975966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5b7d7f33%3A0xadb2c8e6b7e0e0c!2s123%20Business%20Ave%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sus!4v1635781234567!5m2!1sen!2sus"
                            allowFullScreen=""
                            loading="lazy"
                            title="Company Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    </>
};

export default ContactUs;