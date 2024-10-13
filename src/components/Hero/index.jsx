import { Wrapper, MyContainer } from '../../Container/MyContainer/style';

const Hero = () => {
    return (
        <div className='flex justify-center '>
            <div className='hero  rounded-xl w-[95%] '>
                <Wrapper>
                    <MyContainer className=' flex flex-col md:flex-row '>
                        <div className=' text-white py-[50px]  lg:py-[120px] flex flex-col justify-center'>
                            <div className='text-[30px] sm:text-[35px] xl:text-[50px]  font-bold'>
                                Delivering Care, One Prescription at a Time
                            </div>
                            <p className='text-[20px] font-medium mt-5  '>
                                Aenean gravida nibh consectetur mollis montes mi
                                ridiculus vitae ac suspendisse sollicitudin.
                            </p>
                            <div className='mt-5 flex  gap-4 '>
                                <button className='py-3 text-[18px] text-black font-medium px-6 rounded-md bg-[#C2C375]'>
                                    Shop online
                                </button>
                                <button className='py-3 text-[18px] text-white font-medium px-6 rounded-md bg-transparent border-2 border-white'>
                                    Consultation
                                </button>
                            </div>
                        </div>
                        <div className='  self-center md:self-end '>
                            <img
                                className='w-[90%] '
                                src='https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/male-and-female-doctors-in-white-coats-with-stetho-2022-12-16-15-24-39-utc2.png'
                                alt=''
                            />
                        </div>
                    </MyContainer>
                </Wrapper>
            </div>
        </div>
    );
};
export default Hero;
