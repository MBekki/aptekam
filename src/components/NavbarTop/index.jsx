import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPhoneAlt,
    FaTwitter,
} from 'react-icons/fa';
import { CiClock2, CiMail } from 'react-icons/ci';

const NavbarTop = () => {
    return (
        <div className='bg-[--main-color] py-3 hidden md:flex justify-center items-center  '>
            <div className='w-[95%] text-white flex justify-between'>
                <div className='flex gap-4 text-[15px]'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                    <FaLinkedinIn />
                </div>
                <div className='flex gap-3 items-center'>
                    <p className='flex gap-1 items-center'>
                        <CiMail />
                        info@yourdomain.com
                    </p>
                    |
                    <p className='flex gap-1 items-center'>
                        <FaPhoneAlt />
                        (555) 987-6543
                    </p>
                    |
                    <p className='flex gap-1 items-center'>
                        <CiClock2 />
                        Mon - Sat : 08.00-21.00
                    </p>
                </div>
            </div>
        </div>
    );
};
export default NavbarTop;
