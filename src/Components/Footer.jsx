import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-subtle-light dark:bg-subtle-dark mt-10">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <div className='flex items-center gap-2 mb-4'>
                            <img src="https://img.icons8.com/?size=60&id=nCw0587tiM_W&format=png" alt="" />
                            <a className=" text-xl font-bold ">Playora</a>
                        </div>
                        <p className="text-sm text-text-light/70 dark:text-text-dark/70">Discover the joy of local toys.</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Explore</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to={'/'} className="hover:text-orange-500" >Home</Link></li>
                            <li><Link to={'/allToys'} className="hover:text-orange-500" >Shop</Link></li>
                            <li><Link to={'/review'} className="hover:text-orange-500" >Review</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to={'/contactUs'} className="hover:text-orange-500">Contact Us</Link></li>
                            <li><Link to={'/faq'} className="hover:text-orange-500">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to={'/terms'} className="hover:text-orange-500">Terms of Service</Link></li>
                            <li><Link to={'/policy'} className="hover:text-orange-500">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-text-light/20 dark:border-text-dark/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-text-light/70 dark:text-text-dark/70">
                    <p>© 2024 Playora. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link target='_blank' to={'https://github.com/tasnim-88'} className="hover:text-primary"><FaGithub size={24} /></Link>
                        <Link target='_blank' to={'https://www.facebook.com/tasnim.mahmud.37/'} className="hover:text-primary"><FaFacebook size={24} /></Link>
                        <Link to={'https://www.instagram.com/'} target='_blank' className="hover:text-primary" ><FaInstagram size={24} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;