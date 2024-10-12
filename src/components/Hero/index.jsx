const Hero = () => {
    return (
        <div className='flex justify-center '>
            <div className='hero  rounded-xl w-[95%] flex flex-col lg:flex-row'>
                <div className='lg:w-[50%] py-[100px] xl:py-[120px] px-5 flex flex-col items-center text-white  '>
                    <div className='text-[30px] sm:text-[40px] xl:text-[50px] md:w-[80%] font-bold'>
                        Delivering Care, One Prescription at a Time
                    </div>
                    <p className='text-[20px] font-medium mt-5 md:w-[80%] '>
                        Aenean gravida nibh consectetur mollis montes mi
                        ridiculus vitae ac suspendisse sollicitudin.
                    </p>
                    <div className='mt-5 flex  gap-4 md:w-[80%]'>
                        <button className='py-3 text-[18px] text-black font-medium px-6 rounded-md bg-[#C2C375]'>
                            Shop online
                        </button>
                        <button className='py-3 text-[18px] text-white font-medium px-6 rounded-md bg-transparent border-2 border-white'>
                            Consultation
                        </button>
                    </div>
                </div>
                <div className='lg:w-[50%] flex justify-center  self-center md:self-end '>
                    <img
                        className='w-[100%] sm:w-[60%] lg:w-auto xl:w-[60%]'
                        src='https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/male-and-female-doctors-in-white-coats-with-stetho-2022-12-16-15-24-39-utc2.png'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
};
export default Hero;
