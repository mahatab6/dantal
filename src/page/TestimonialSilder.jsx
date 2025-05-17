import React, { } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../src/testindex.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import review from '../assets/review.png'



const TestimonialSilder = () => {

    const testimonials = [
  {
    "quote": "Dental Care completely changed my experience with dentists. The staff is so friendly and professional.",
    "name": "Emily Watson",
    "role": "Marketing Executive",
    "image": "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    "quote": "I used to dread dental visits, but Dental Care makes everything so easy and painless.",
    "name": "Michael Lee",
    "role": "Software Engineer",
    "image": "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    "quote": "Clean clinic, skilled dentists, and affordable services. Highly recommended!",
    "name": "Sophia Martinez",
    "role": "Freelance Writer",
    "image": "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    "quote": "From booking to treatment, the whole experience was smooth and stress-free.",
    "name": "Daniel Kim",
    "role": "Startup Founder",
    "image": "https://randomuser.me/api/portraits/men/77.jpg"
  },
  {
    "quote": "The hygienist took extra care of my sensitive gums. Very thoughtful and gentle approach.",
    "name": "Olivia Brown",
    "role": "Nurse",
    "image": "https://randomuser.me/api/portraits/women/52.jpg"
  },
  {
    "quote": "Dental Care restored my smile with their cosmetic dentistry. I couldn’t be happier!",
    "name": "James Miller",
    "role": "Sales Consultant",
    "image": "https://randomuser.me/api/portraits/men/81.jpg"
  },
  {
    "quote": "They are always on time, and the service is top-notch. I love how modern the clinic feels.",
    "name": "Lily Johnson",
    "role": "Graphic Designer",
    "image": "https://randomuser.me/api/portraits/women/29.jpg"
  },
  {
    "quote": "I got my braces here, and the journey has been great thanks to their supportive team.",
    "name": "Ryan Davis",
    "role": "College Student",
    "image": "https://randomuser.me/api/portraits/men/24.jpg"
  },
  {
    "quote": "The online appointment system is so convenient. Saves me time and hassle every visit.",
    "name": "Ava White",
    "role": "Teacher",
    "image": "https://randomuser.me/api/portraits/women/75.jpg"
  },
  {
    "quote": "They walked me through every step of my dental surgery. Felt very well taken care of.",
    "name": "Ethan Moore",
    "role": "Architect",
    "image": "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    "quote": "Affordable, clean, and caring – Dental Care has earned a loyal customer in me.",
    "name": "Chloe Robinson",
    "role": "Small Business Owner",
    "image": "https://randomuser.me/api/portraits/women/37.jpg"
  },
  {
    "quote": "Best pediatric dentists! My kids love coming here and that means a lot to us.",
    "name": "William Harris",
    "role": "Parent",
    "image": "https://randomuser.me/api/portraits/men/56.jpg"
  }
]

    return (
        <div className='testimonial-section'>

            <div className='flex items-center gap-3 justify-items-center'>
                <img className='w-[50px]' src={review} alt="" />
                <h1 className='text-xl'>Testimonials</h1>
            </div>
             <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                 {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="mx-auto flex flex-col md:flex-row items-center gap-8 p-15 ">
                        <img
                            src={item.image}
                            alt=""
                            className="w-24 h-24 rounded-full border-4 border-white object-cover md:ms-0"
                        />
                        <div className="text-center md:text-left">
                            <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                            “{item.quote}”
                            </p>
                            <div className="mt-6">
                            <p className="font-bold text-lg">{item.name}</p>
                            <p className="text-sm">{item.role}</p>
                            </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default TestimonialSilder;