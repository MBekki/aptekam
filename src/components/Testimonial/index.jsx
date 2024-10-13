import { MyContainer, Wrapper } from '../../Container/MyContainer/style';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { FaStar } from 'react-icons/fa';

const data = [
    {
        comment:
            'Molestie odio inceptos adipiscing dui dictum. Sodales aptent hac tristique integer nullam in vestibulum. Hac feugiat placerat laoreet fames pharetra pede imperdiet sodales in.',
        author: 'Wilbur N. Shore',
        job: 'Accounting',
        img: 'https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/Testimonials-3.jpg',
    },
    {
        comment:
            'Molestie odio inceptos adipiscing dui dictum. Sodales aptent hac tristique integer nullam in vestibulum. Hac feugiat placerat laoreet fames pharetra pede imperdiet sodales in.',
        author: 'Anita D. Costin',
        job: 'Manager',
        img: 'https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/Testimonials-1.jpg',
    },
    {
        comment:
            'Molestie odio inceptos adipiscing dui dictum. Sodales aptent hac tristique integer nullam in vestibulum. Hac feugiat placerat laoreet fames pharetra pede imperdiet sodales in.',
        author: 'Robert J. Adams',
        job: 'CEO of Dragonfly',
        img: 'https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/Testimonials-2.jpg',
    },
    {
        comment:
            'Molestie odio inceptos adipiscing dui dictum. Sodales aptent hac tristique integer nullam in vestibulum. Hac feugiat placerat laoreet fames pharetra pede imperdiet sodales in.',
        author: 'Wilbur N. Shore',
        job: 'Accounting',
        img: 'https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/Testimonials-3.jpg',
    },
];

const Testimonial = () => {
    return (
        <div className='testimonail-section py-[70px]'>
            <Wrapper>
                <MyContainer>
                    <div className='text-center uppercase'>Testimonials</div>
                    <div className='text-center text-[35px] font-bold '>
                        What Our Customer are Saying
                    </div>
                    <div className='text-[#6a6a6a] text-center'>
                        Per aenean auctor pellentesque a quam quis habitant mus
                        semper nostra ultrices. Per <br /> odio finibus rhoncus
                        sit cubilia duis leo maximus ad.
                    </div>
                    <Swiper
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        loop
                        modules={[Autoplay]}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            560: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        className='mt-6'
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index + 1}>
                                <div className='bg-white p-5 rounded-2xl'>
                                    <div className='flex gap-2 items-center text-[#47A2A3] justify-center'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                    <div className='mt-3 text-[#6a6a6a] text-center'>
                                        {item.comment}
                                    </div>
                                    <div className='flex justify-center gap-3 mt-3'>
                                        <div>
                                            <img
                                                src={item.img}
                                                className='w-[57px] h-[57px] rounded-full'
                                                alt=''
                                            />
                                        </div>
                                        <div>
                                            <p className='font-semibold text-center'>
                                                {item.author}
                                            </p>
                                            <p className='text-[#6a6a6a] text-center'>
                                                {item.job}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </MyContainer>
            </Wrapper>
        </div>
    );
};
export default Testimonial;
