import { IoCalendarOutline } from 'react-icons/io5';
import { MyContainer, Wrapper } from '../../Container/MyContainer/style';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPhoneAlt,
    FaPlus,
    FaTwitter,
} from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';
import { CiMail } from 'react-icons/ci';
import Img from '../../assets/images/meros-pharm-removebg-preview.png';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#F6F6F6] py-[50px]'>
                <Wrapper>
                    <MyContainer>
                        <div className='text-center font-semibold text-[18px]'>
                            About Pharamedic
                        </div>
                        <div className='text-center mt-2 text-[#6a6a6a] '>
                            Sagittis ligula fermentum et orci suscipit class
                            letius massa. Lorem ornare <br /> massa phasellus
                            cubilia consectetur integer volutpat.
                        </div>
                        <div className='flex gap-3 justify-center mt-3'>
                            <div className='text-[40px] text-[--main-color]'>
                                <IoCalendarOutline />
                            </div>
                            <div>
                                <p className='text-[15px] font-medium'>
                                    Monday-Saturday
                                </p>
                                <p className='text-[13px] text-[#6a6a6a] '>
                                    08.00 am - 09.00 pm{' '}
                                </p>
                            </div>
                        </div>
                        <div className='mt-8 grid  grid-cols-2 md:grid-cols-3 gap-5'>
                            <div className='flex flex-col gap-3'>
                                <div className='text-[18px] font-semibold'>
                                    Quick Links
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <FaPlus className='text-[#47A2A3]' />
                                        <a href='#' className='text-[#6a6a6a]'>
                                            About Us
                                        </a>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <FaPlus className='text-[#47A2A3]' />
                                        <a href='#' className='text-[#6a6a6a]'>
                                            Service
                                        </a>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <FaPlus className='text-[#47A2A3]' />
                                        <a href='#' className='text-[#6a6a6a]'>
                                            Contact
                                        </a>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <FaPlus className='text-[#47A2A3]' />
                                        <a href='#' className='text-[#6a6a6a]'>
                                            Pages
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <div className='text-[18px] font-semibold'>
                                    Help & Support
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <FaPlus className='text-[#47A2A3]' />
                                        <a href='#' className='text-[#6a6a6a]'>
                                            Help Center
                                        </a>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <FaPlus className='text-[#47A2A3]' />
                                        <a href='#' className='text-[#6a6a6a]'>
                                            Ticket Support
                                        </a>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <FaPlus className='text-[#47A2A3]' />
                                        <a href='#' className='text-[#6a6a6a]'>
                                            Locate Us
                                        </a>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <FaPlus className='text-[#47A2A3]' />
                                        <a href='#' className='text-[#6a6a6a]'>
                                            FAQ
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <div className='text-[18px] font-semibold'>
                                    Reach Us
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <MdOutlineLocationOn className='text-[#47A2A3]' />
                                        <p className='text-[#6a6a6a]'>
                                            789 Oak St, Smalltown, TX 23456
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <CiMail className='text-[#47A2A3]' />
                                        <p className='text-[#6a6a6a]'>
                                            info@yourdomain.com
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <FaPhoneAlt className='text-[#47A2A3]' />
                                        <p className='text-[#6a6a6a]'>
                                            (555) 987-6543
                                        </p>
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <a
                                            href='#'
                                            className='w-[36px] h-[36px] bg-[#47A2A3] rounded-md flex justify-center items-center text-white text-[18px]'
                                        >
                                            <FaFacebookF />
                                        </a>
                                        <a
                                            href='#'
                                            className='w-[36px] h-[36px] bg-[#47A2A3] rounded-md flex justify-center items-center text-white text-[18px]'
                                        >
                                            <FaTwitter />
                                        </a>
                                        <a
                                            href='#'
                                            className='w-[36px] h-[36px] bg-[#47A2A3] rounded-md flex justify-center items-center text-white text-[18px]'
                                        >
                                            <FaInstagram />
                                        </a>
                                        <a
                                            href='#'
                                            className='w-[36px] h-[36px] bg-[#47A2A3] rounded-md flex justify-center items-center text-white text-[18px]'
                                        >
                                            <FaLinkedinIn />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </MyContainer>
                </Wrapper>
            </div>
            <div className='bg-[#2F6C6D] py-3  text-white'>
                <Wrapper>
                    <MyContainer className='flex gap-3 text-[14px] flex-col md:flex-row items-center justify-between'>
                        <div className='flex gap-3'>
                            <a href='#'>Terms of Service</a>
                            <p>|</p>
                            <a href='#'>Privacy Policy</a>
                            <p>|</p>
                            <a href='#'>Cookie Policy</a>
                        </div>
                        <div className='py-2  w-full md:px-4 md:w-auto flex justify-center bg-white rounded-lg'>
                            <img
                                src={Img}
                                className='w-[150px] h-[40px] object-cover'
                                alt=''
                            />
                        </div>
                        <div>Copyright © 2023 Pharamedic by TBWBThemes</div>
                    </MyContainer>
                </Wrapper>
            </div>
        </div>
    );
};
export default Footer;
