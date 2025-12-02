import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { toast } from 'react-toastify';
import { Link } from 'react-router';
import useToys from '../../Hooks/useToys';
import Loading from '../../Pages/Loading';

const ReviewForm = () => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const [recommend, setRecommend] = useState(true);

    const { loading } = useToys();

    if (loading) {
        return <Loading />;
    }

    const handleReview = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const textarea = form.textarea.value
        // console.log(title);

        if (!title || !textarea) {
            toast.error('Please fill out the form.')
            return
        }
        toast.success('Form submitted successfully.')
        form.reset()

    }

    return (
        <div>
            <title>Review</title>
            <header className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </header>
            <form onSubmit={handleReview} className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 mt-10">
                <div className="flex items-center gap-3 mb-3">
                    <img
                        src="https://img.icons8.com/?size=60&id=nCw0587tiM_W&format=png"
                        alt="Toy Thumbnail"
                        className="w-12 h-12 rounded-lg"
                    />
                    <div>
                        <h2 className="text-lg font-semibold">Leave a Review</h2>
                        <p className="text-sm text-gray-500">How would you rate our service?</p>
                    </div>
                </div>

                <hr className="my-4" />

                {/* Rating */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium mb-2">Your overall rating</p>
                        <div className="flex gap-2">
                            {[...Array(5)].map((_, index) => {
                                const starValue = index + 1;
                                return (
                                    <button
                                        key={starValue}
                                        type="button"
                                        onClick={() => setRating(starValue)}
                                        onMouseEnter={() => setHover(starValue)}
                                        onMouseLeave={() => setHover(null)}
                                    >
                                        <FaStar
                                            className={`text-2xl ${starValue <= (hover || rating) ? 'text-orange-400' : 'text-gray-300'
                                                }`}
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* File upload */}
                    <div className="w-1/2 border-2 border-dashed border-gray-300 rounded-lg h-32 flex flex-col justify-center items-center cursor-pointer hover:border-orange-400">
                        <p className="text-gray-400 text-sm">Drag & drop or <span className="text-orange-500 cursor-pointer">browse</span></p>
                    </div>
                </div>

                {/* Review title */}
                <div className="mt-6">
                    <label className="block text-sm font-medium mb-1">Give your review a title</label>
                    <input
                        name='title'
                        required
                        type="text"
                        placeholder="e.g. Endless hours of fun!"
                        className="w-full bg-base-300 text-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                {/* Review message */}
                <div className="mt-6">
                    <label className="block text-sm font-medium mb-1">Tell us what you think!</label>
                    <textarea
                        name='textarea'
                        required
                        placeholder="What did your child like most?"
                        maxLength={500}
                        className="w-full bg-base-300 text-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 h-28"
                    />
                    <p className="text-right text-xs text-gray-400 mt-1">0/500</p>
                </div>

                {/* Recommendation */}
                <div className="mt-6">
                    <p className="font-medium mb-2">Would you recommend this toy to other families?</p>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 border rounded-full px-4 py-1 cursor-pointer">
                            <input
                                type="radio"
                                name="recommend"
                                checked={recommend === true}
                                onChange={() => setRecommend(true)}
                            />
                            Yes
                        </label>
                        <label className="flex items-center gap-2 border rounded-full px-4 py-1 cursor-pointer">
                            <input
                                type="radio"
                                name="recommend"
                                checked={recommend === false}
                                onChange={() => setRecommend(false)}
                            />
                            No
                        </label>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3 mt-8">
                    <Link to={'/'} className="px-4 py-2 rounded-md border hover:bg-gray-100">Cancel</Link>
                    <button type='submit' className="px-5 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600">
                        Submit Review
                    </button>
                </div>
            </form>
            <footer className='bg-orange-100'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ReviewForm;