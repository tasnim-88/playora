import React, { useState, useContext } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const { user, updateUser } = useContext(AuthContext);
    // console.log(user);
    

    // Displayed info (current saved)
    const [displayName, setDisplayName] = useState(user?.displayName || "");
    const [displayPhoto, setDisplayPhoto] = useState(user?.photoURL || "");

    // Editable form fields
    const [name, setName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

    const handleSave = (e) => {
        e.preventDefault();

        updateUser({ displayName: name, photoURL: photoURL })
            .then(() => {
                // ✅ Update displayed info only after save
                setDisplayName(name);
                setDisplayPhoto(photoURL);

                toast.success("Profile updated successfully!");
            })
            .catch((error) => {
                toast.error("Error updating profile: " + error.message);
            });
    };

    return (
        <div>
            <title>{name}</title>
            <header className='sticky top-0 z-50'>
                <Navbar />
            </header>

            <main className="max-w-9/12 mx-auto mt-10">
                <div className="min-h-screen bg-base-300 flex flex-col items-center justify-center p-6">
                    <h1 className="text-2xl font-bold mb-8">My Profile</h1>

                    {/* Profile Info */}
                    <div className="flex items-center gap-5 p-2">
                        {/* Avatar */}
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                            <img
                                src={displayPhoto || "https://img.icons8.com/?size=128&id=WCJ1D1cDlqqD&format=png"}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Name & Email */}
                        <div className="flex flex-col">
                            <h2 className="font-semibold text-lg">{displayName || "User Name"}</h2>
                            <p className="text-sm text-gray-500">{user?.email || "user@email.com"}</p>
                        </div>
                    </div>

                    {/* Edit Form */}
                    <form
                        onSubmit={handleSave}
                        className="bg-white shadow-md rounded-2xl p-6 mt-6 w-full max-w-md"
                    >
                        <h3 className="font-semibold mb-4">Edit Information</h3>

                        <label className="block mb-2 text-sm font-medium">Full Name</label>
                        <input
                            type="text"
                            className="input input-bordered w-full mb-4 bg-base-300"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name"
                        />

                        <label className="block mb-2 text-sm font-medium">Profile Picture URL</label>
                        <input
                            type="url"
                            className="input input-bordered w-full mb-6 bg-base-300"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            placeholder="Enter image url"
                        />

                        <button
                            type="submit"
                            className="btn bg-[#FACC15] hover:bg-[#EAB308] text-gray-800 font-medium w-full"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </main>

            <footer className="bg-orange-100">
                <Footer />
            </footer>
        </div>
    );
};

export default MyProfile;
