import React from 'react';
import Habits from '../assets/dental.jpg'
import Whitening from '../assets/boy-dental.jpg'
import dentist from '../assets/dentistN.jpg'
import little from '../assets/little.jpg'
const Blog = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <h1 className='text-2xl font-bold text-cyan-300 '>-BLOG</h1>
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src={Habits} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">5 Simple Habits for a Healthier Smile</h3>
                            <span className="text-xs dark:text-gray-600">February 1, 2025</span>
                            <p>Maintaining a healthy smile doesn't have to be complicated. Brushing twice a day, flossing daily, limiting sugary snacks, drinking plenty of water, and visiting your dentist regularly are small habits that make a big difference. Start today and your teeth will thank you!</p>
                        </div>
                    </a>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={Whitening} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Is Whitening Toothpaste Really Effective?</h3>
                                <span className="text-xs dark:text-gray-600">January 11, 2025</span>
                                <p>Whitening toothpaste can help remove surface stains, but it won’t change the natural color of your teeth. For deeper whitening, professional treatments may be a better choice. Learn the pros and cons so you can pick the right option for your smile.</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={little} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Why You Shouldn't Skip Dental Checkups</h3>
                                <span className="text-xs dark:text-gray-600">May 22, 2025</span>
                                <p>Even if your teeth feel fine, regular dental checkups are crucial. Dentists can detect issues like cavities, gum disease, or oral cancer early—before they become serious. Think of it as a routine check-up for your whole body’s health.</p>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={dentist} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">The Truth About Sugar and Tooth Decay</h3>
                                <span className="text-xs dark:text-gray-600">Jun 3, 2025</span>
                                <p>Sugar doesn’t just cause cavities—it feeds harmful bacteria that erode enamel. The more often you snack on sugary foods, the more your teeth are at risk. Try replacing sweets with healthier options like fruits or nuts to protect your pearly whites.</p>
                            </div>
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-[#25CCF7]">more posts...</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;