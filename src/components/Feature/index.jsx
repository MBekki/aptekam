import { MyContainer, Wrapper } from '../../Container/MyContainer/style';
import { FaHandHoldingUsd, FaHeadset } from 'react-icons/fa';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { LuShieldCheck } from 'react-icons/lu';

const data = [
    {
        title: 'Free easy Return',
        desc: 'Return to 7 days',
        icon: <FaHandHoldingUsd />,
    },
    {
        title: ' Free Delivery Monday ',
        desc: 'Orders over $499',
        icon: <LiaShippingFastSolid />,
    },
    {
        title: 'All Day Support',
        desc: '24/7 Support care',
        icon: <FaHeadset />,
    },
    {
        title: 'Secure Checkout',
        desc: '100% Protected by paypa',
        icon: <LuShieldCheck />,
    },
];

const Feature = () => {
    return (
        <Wrapper className='py-[50px]'>
            <MyContainer className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                {data.map((item, ind) => {
                    return (
                        <div
                            key={ind + 1}
                            className=' flex gap-5 items-center py-2 m-auto sm:m-0'
                        >
                            <div className='text-[40px] text-[--main-color]'>
                                {item.icon}
                            </div>
                            <div>
                                <p className='font-semibold'>{item.title}</p>
                                <p className='text-gray-500 text-[14px]'>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </MyContainer>
        </Wrapper>
    );
};
export default Feature;
