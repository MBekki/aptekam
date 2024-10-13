import { FaCheck } from 'react-icons/fa';
import { MyContainer, Wrapper } from '../../Container/MyContainer/style';
import { TbDeviceLandlinePhone } from 'react-icons/tb';
import { CiClock2 } from 'react-icons/ci';

const Form = () => {
    return (
        <div className='form-section py-[50px] my-[50px]'>
            <Wrapper>
                <MyContainer className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                    <div className='p-8 rounded-lg bg-white flex flex-col '>
                        <div className='font-bold text-[28px] '>
                            Complete the form below
                        </div>
                        <div className='text-[#6a6a6a]'>
                            Eleifend cubilia parturient id ridiculus lacus nisl
                            dui dictum maximus.
                        </div>
                        <div className='flex flex-col gap-4 mt-5'>
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <div className='w-full'>
                                    <div>First Name</div>
                                    <input
                                        type='text'
                                        className='bg-[#f6f6f6] rounded-lg py-2 h-[44px] px-3 w-full'
                                        placeholder='First Name'
                                    />
                                </div>
                                <div className='w-full'>
                                    <div>Last Name</div>
                                    <input
                                        type='text'
                                        className='bg-[#f6f6f6] rounded-lg py-2 h-[44px] px-3 w-full'
                                        placeholder='Last Name'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <div className='w-full'>
                                    <div>Phone</div>
                                    <input
                                        type='text'
                                        className='bg-[#f6f6f6] rounded-lg py-2 h-[44px] px-3 w-full'
                                        placeholder='Phone'
                                    />
                                </div>
                                <div className='w-full'>
                                    <div>Email</div>
                                    <input
                                        type='text'
                                        className='bg-[#f6f6f6] rounded-lg py-2 h-[44px] px-3 w-full'
                                        placeholder='Email  '
                                    />
                                </div>
                            </div>
                            <div className='w-full'>
                                <div>Adress</div>
                                <textarea
                                    placeholder='Your Adress'
                                    className='bg-[#f6f6f6] rounded-lg py-2 h-[125px] px-3 w-full'
                                    name=''
                                    id=''
                                ></textarea>
                            </div>
                            <div>
                                <button className='h-[44px] w-full text-[18px] font-medium rounded-lg bg-[#47A2A3] text-white'>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='text-white'>
                        <div className='uppercase'>Become a Member</div>
                        <div className='text-[35px] font-bold'>
                            We assure customer satisfaction with personal care
                        </div>
                        <div className='mt-2'>
                            Enim scelerisque ut in vestibulum elit ridiculus
                            laoreet torquent. Sodales euismod porta finibus
                            phasellus justo inceptos nisi erat.
                        </div>
                        <div className='mt-2'>
                            <div className='text-[22px] font-bold'>
                                Benefits of our membership program:
                            </div>
                            <div className='mt-4 flex flex-col gap-2 text-[14px] font-medium'>
                                <div className='flex items-center gap-1'>
                                    <FaCheck className='text-[#C2C375] text-[18px]' />
                                    <p>
                                        Suscipit sagittis enim inceptos non
                                        feugiat rhoncus
                                    </p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <FaCheck className='text-[#C2C375] text-[18px]' />
                                    <p>
                                        Fermentum mattis ridiculus finibus lacus
                                        phasellus viverra dui.
                                    </p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <FaCheck className='text-[#C2C375] text-[18px]' />
                                    <p>
                                        Sociosqu volutpat class ipsum adipiscing
                                        mauris.
                                    </p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <FaCheck className='text-[#C2C375] text-[18px]' />
                                    <p>
                                        Magna bibendum lacinia ullamcorper
                                        convallis quis mattis.
                                    </p>
                                </div>
                            </div>
                            <hr className='mt-3' />
                        </div>
                        <div className='flex flex-col xl:flex-row gap-5 mt-3'>
                            <div className='bg-white p-4 rounded-lg'>
                                <div className='flex gap-3'>
                                    <div className='w-[56px] h-[56px] flex justify-center items-center text-[28px] bg-[#47A2A3] rounded-lg'>
                                        <TbDeviceLandlinePhone />
                                    </div>
                                    <div className=''>
                                        <div className='text-[15px] font-medium text-[--main-color]'>
                                            Contact Us
                                        </div>
                                        <div className='text-[20px] text-black font-semibold'>
                                            (555) 987-6543{' '}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-4 rounded-lg'>
                                <div className='flex gap-3'>
                                    <div className='w-[56px] h-[56px] flex justify-center items-center text-[28px] bg-[#47A2A3] rounded-lg'>
                                        <CiClock2 />
                                    </div>
                                    <div>
                                        <div className='text-[15px] font-medium text-[--main-color]'>
                                            Office Hours
                                        </div>
                                        <div className='text-[20px] text-black font-semibold'>
                                            8.00am-9.00pm
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MyContainer>
            </Wrapper>
        </div>
    );
};
export default Form;
