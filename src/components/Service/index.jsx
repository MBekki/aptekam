import { MyContainer, Wrapper } from '../../Container/MyContainer/style';
import { GiMedicinePills } from 'react-icons/gi';
import { LiaStethoscopeSolid } from 'react-icons/lia';
import { TbMedicalCross } from 'react-icons/tb';
import { FaUserDoctor } from 'react-icons/fa6';
import { TfiAgenda } from 'react-icons/tfi';
import { BsShop } from 'react-icons/bs';

const data = [
    {
        title: 'Generic Medicine',
        desc: 'Donec metus efficitur platea vitae habitasse dis magnis sodales. Penatibus eros malesuada est platea dis.',
        icon: <GiMedicinePills />,
    },
    {
        title: 'Health Check & Screening ',
        desc: 'Donec metus efficitur platea vitae habitasse dis magnis sodales. Penatibus eros malesuada est platea dis.',
        icon: <LiaStethoscopeSolid />,
    },
    {
        title: 'Vaccination',
        desc: 'Donec metus efficitur platea vitae habitasse dis magnis sodales. Penatibus eros malesuada est platea dis.',
        icon: <TbMedicalCross />,
    },
    {
        title: 'Medicine Consultation',
        desc: 'Donec metus efficitur platea vitae habitasse dis magnis sodales. Penatibus eros malesuada est platea dis.',
        icon: <FaUserDoctor />,
    },
    {
        title: 'Doctor Receipt',
        desc: 'Donec metus efficitur platea vitae habitasse dis magnis sodales. Penatibus eros malesuada est platea dis.',
        icon: <TfiAgenda />,
    },
    {
        title: 'Pharmacy Store',
        desc: 'Donec metus efficitur platea vitae habitasse dis magnis sodales. Penatibus eros malesuada est platea dis.',
        icon: <BsShop />,
    },
];

const Service = () => {
    return (
        <Wrapper className='py-[100px]'>
            <MyContainer>
                <div className='text-center uppercase'>What We Offer</div>
                <div className='text-center font-bold text-[35px]'>
                    A pharmacy with world-class service
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-10'>
                    {data.map((item, ind) => {
                        return (
                            <div
                                key={ind + 1}
                                style={{
                                    boxShadow:
                                        '0px 10px 40px -5px rgba(0, 0, 0, 0.15)',
                                }}
                                className='rounded-lg bg-white p-4 pt-[50px] service-section-card transition-all border border-white'
                            >
                                <div className='flex justify-center mt-[-75px]'>
                                    <div className='w-[70px] service-section-icon h-[70px] bg-[#47A2A3] rounded-lg flex justify-center items-center text-[35px] text-white'>
                                        {item.icon}
                                    </div>
                                </div>
                                <div className='text-[22px] text-center mt-2 font-semibold'>
                                    {item.title}
                                </div>
                                <div className='text-[16px] text-center mt-2 text-[#6a6a6a]'>
                                    {item.desc}
                                </div>
                                <div>
                                    <button className='rounded-lg mt-4 text-white font-medium py-3 w-full bg-[#47A2A3]'>
                                        Read More
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </MyContainer>
        </Wrapper>
    );
};
export default Service;
