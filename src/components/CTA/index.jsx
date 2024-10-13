import { MyContainer, Wrapper } from '../../Container/MyContainer/style';

const CTA = () => {
    return (
        <div className='cta-section py-[30px]'>
            <Wrapper>
                <MyContainer className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='text-white'>
                        <div className='text-[28px] font-bold'>
                            Sign Up For Newsletter
                        </div>
                        <div className='font-medium text-[18px]'>
                            Join 60,000+ Subscribers and get a new discount{' '}
                            <br />
                            coupon every saturday
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <input
                            type='text'
                            className='h-[51px] pr-[125px] w-full rounded-lg py-2 px-3 bg-white'
                            placeholder='Enter your email'
                        />
                        <button className='h-[44px] ml-[-123px] w-[120px] px-5 rounded-lg bg-[#C2C375] font-medium'>
                            Sign Up
                        </button>
                    </div>
                </MyContainer>
            </Wrapper>
        </div>
    );
};
export default CTA;
