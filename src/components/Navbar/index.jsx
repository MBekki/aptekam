import { useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { NavLink, useLocation } from 'react-router-dom';
import Img from '../../assets/images/meros-pharm-removebg-preview.png';

const Navbar = () => {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const getNavbarBackgroundColor = () => {
        return scrolled ? 'bg-white shadow-lg' : 'bg-white';
    };

    const getNavbarTextColor = () => {
        return scrolled ? 'text-black' : 'text-black';
    };

    return (
        <>
            <div
                className={` z-40 sticky top-0 transition-all flex justify-center items-center left-0 ${getNavbarBackgroundColor()}`}
            >
                <div className='w-[95%]'>
                    <div className='navbar z-40 py-3 w-full h-[94px] flex justify-between items-center'>
                        <NavLink to={'/'} className={`logo `}>
                            <img src={Img} className='w-[150px]' />
                        </NavLink>
                        <div
                            className={`hidden md:flex items-center gap-5 text-[18px] font-bold ${getNavbarTextColor()}`}
                        >
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={'/'}>About</NavLink>
                            <NavLink to={'/'}>Service</NavLink>
                            <NavLink to={'/'}>Contact</NavLink>
                            <NavLink to={'/'}>Pages</NavLink>
                        </div>
                        <button
                            className={`md:hidden text-[35px] ${
                                isOpen ? 'hidden' : 'block'
                            } ${getNavbarTextColor()}`}
                            onClick={toggleMenu}
                        >
                            <IoMenu />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                style={{ background: 'rgba(0, 0, 0, 0.932)' }}
                className={`fixed top-0 z-50 left-0 h-screen w-full transform transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className='p-4'>
                    <div className='flex justify-end mr-[28px] mt-[6px]'>
                        <button
                            className='text-[35px] text-white'
                            onClick={toggleMenu}
                        >
                            <IoMenu />
                        </button>
                    </div>
                    <nav className='flex flex-col text-[18px] font-bold text-white mt-10 space-y-4'>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/'}>About</NavLink>
                        <NavLink to={'/'}>Service</NavLink>
                        <NavLink to={'/'}>Contact</NavLink>
                        <NavLink to={'/'}>Pages</NavLink>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
