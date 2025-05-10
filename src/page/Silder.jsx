import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.png'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../src/styles.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

const Silder = () => {

        const progressCircle = useRef(null);
        const progressContent = useRef(null);
        const onAutoplayTimeLeft = (s, time, progress) => {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        };
  
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide> <div className='w-[98%] mx-auto m-2 p-3 bg-[#25CCF7] rounded-2xl'>
                            <div className='flex flex-col-reverse md:flex-row items-center '>
                                <div className='p-4 text-center space-y-2'>
                                    <h1 className='text-4xl font-bold'>Caring for Your Smile with Compassion,<br /> Precision, and a Gentle Touch — Because You Deserve the Best</h1>
                                        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                                            <Typewriter
                                                words={[
                                                'From routine checkups to advanced treatments, we’re here to make your dental care comfortable, affordable, and worry-free.'
                                                ]}
                                                loop={false}
                                                cursor
                                                cursorStyle="|"
                                                typeSpeed={35}
                                                deleteSpeed={0}
                                                delaySpeed={1000}
                                            />
                                        </p>
                                    <button className='btn bg-white border-0 rounded-2xl p-5 text-base'>view services</button>
                                </div>
                                <div>
                                    <img className='rounded-2xl ' src={hero1} alt="" />
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[98%] mx-auto m-3 p-3 rounded-2xl bg-yellow-300 border-1 border-black'>
                                   <div className='flex flex-col-reverse md:flex-row-reverse items-center  py-10 '>
                                    <div className='p-4 text-center space-y-2'>
                                        <h1 className='text-4xl font-bold'>Affordable, Trusted Dental Care — Keeping You and Your Family <br />Smiling Brighter Every Day</h1>
                                           <p className="text-lg text-gray-700 mt-4 leading-relaxed">
                                                <Typewriter
                                                    words={[
                                                    'We offer high-quality dental services at prices that fit your budget — with flexible appointments and a team you can trust.'
                                                    ]}
                                                    loop={false}
                                                    cursor
                                                    cursorStyle="|"
                                                    typeSpeed={35}
                                                    deleteSpeed={0}
                                                    delaySpeed={1000}
                                                />
                                            </p>
                                        <button className='btn bg-[#25CCF7] border-0 rounded-2xl p-5 text-base'>view services</button>
                                    </div>
                                    <div>
                                        <img className='rounded-2xl ' src={hero2} alt="" />
                                    </div>
                                </div>
                            </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
};

export default Silder;