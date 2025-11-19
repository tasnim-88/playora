import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Footer from "../Components/Footer";
import { toast } from "react-toastify";
import useToys from "../Hooks/useToys";
import Loading from "./Loading";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const { loading } = useToys();

    if (loading) {
        return <Loading />;
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you for contacting Playora! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div>
            <title>Contact Us</title>
            <header >
                <Navbar></Navbar>
            </header>

            <div className="min-h-screen bg-[#FFF9F0]">

                {/* Header Section */}
                <section className="text-center py-12 bg-linear-to-r from-[#FFECC0] to-[#FFC29B]">
                    <h1 className="text-4xl font-bold text-gray-800">Contact Playora</h1>
                    <p className="text-lg text-gray-700 mt-2">
                        We’d love to hear from you! Whether you have a question, feedback, or
                        partnership idea — we’re here to help.
                    </p>
                </section>

                {/* Contact Section */}
                <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Side – Contact Info */}
                    <div>
                        <h2 className="text-2xl font-semibold text-[#FF8A00] mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-gray-600 mb-6">
                            You can reach us anytime via email, phone, or visit our office
                            during business hours. We’re happy to assist you!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-[#FF8A00] text-xl" />
                                <p className="text-gray-700">
                                    123 Toyland Avenue, Dhaka, Bangladesh
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-[#FF8A00] text-xl" />
                                <p className="text-gray-700">+880 1777-555-999</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-[#FF8A00] text-xl" />
                                <p className="text-gray-700">support@playora.com</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-semibold text-gray-800">Office Hours</h3>
                            <p className="text-gray-600">Sunday – Thursday: 9 AM – 6 PM</p>
                            <p className="text-gray-600">Friday & Saturday: Closed</p>
                        </div>
                    </div>

                    {/* Right Side – Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                            Send Us a Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-gray-700 mb-1 font-medium">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#FF8A00] outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-1 font-medium">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#FF8A00] outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-1 font-medium">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Write your message here..."
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#FF8A00] outline-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#FF8A00] text-white font-semibold py-3 rounded-lg hover:bg-[#e47800] transition-all"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>
            </div>
            {/* Footer Note */}
            <footer className='bg-orange-100'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ContactUs;
