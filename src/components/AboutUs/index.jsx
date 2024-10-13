import { MyContainer, Wrapper } from '../../Container/MyContainer/style';
import { FaCheck } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <Wrapper className='py-[50px] about-us-section'>
            <MyContainer className='flex flex-col-reverse lg:flex-row gap-5'>
                <div className='relative w-[100%]'>
                    <div className='w-full'>
                        <img
                            src='https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/young-female-pharmacist-posing-while-working-in-a-pharmacy-e1697689073593-1536x1022.jpg'
                            alt='about-picture'
                            className='rounded-lg w-full'
                        />
                    </div>
                    <div className='p-4 rounded-xl absolute bottom-[-100px] sm:bottom-[-15px] left-[-15px] bg-[#47A2A3]  sm:w-[200px] text-white flex flex-col gap-2'>
                        <div className='flex items-center gap-1'>
                            <FaCheck className='text-[#C2C375] text-[18px]' />
                            <p>General Lab</p>
                        </div>
                        <hr />
                        <div className='flex items-center gap-1'>
                            <FaCheck className='text-[#C2C375] text-[18px]' />
                            <p>General Medicine</p>
                        </div>
                        <hr />
                        <div className='flex items-center gap-1'>
                            <FaCheck className='text-[#C2C375] text-[18px]' />
                            <p>Free Delivery</p>
                        </div>
                        <hr />
                        <div className='flex items-center gap-1'>
                            <FaCheck className='text-[#C2C375] text-[18px]' />
                            <p>Pharmacy Support</p>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] flex flex-col gap-3'>
                    <div className='uppercase'>Who we are</div>
                    <div className='text-[35px] font-bold'>
                        We Are The Most Trusted Pharmacy In This Town
                    </div>
                    <div className='font-medium text-[#6a6a6a] text-[17px]'>
                        Phasellus eu duis parturient ut ipsum. Nibh natoque
                        platea venenatis egestas vel litora neque.
                    </div>
                    <div className=' text-[#6a6a6a] text-[17px]'>
                        Ullamcorper magna euismod aliquam dui at mollis risus
                        imperdiet ac. Lorem consequat egestas si hac venenatis
                        pharetra per metus arcu sem. Sodales duis eget bibendum
                        sapien imperdiet si conubia nullam. Morbi sollicitudin
                        fermentum ornare pulvinar massa auctor sapien augue.
                    </div>
                    <div>
                        <button className='py-2 px-5 font-medium rounded-lg bg-[#47A2A3] text-white'>
                            More About Us
                        </button>
                    </div>
                </div>
            </MyContainer>
        </Wrapper>
    );
};
export default AboutUs;
