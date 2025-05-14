import React, { useState } from 'react';
import PhoneInput from 'react-country-phone-input';

const Booking = () => {

  
  const [phone, setPhone] = useState("");
    return (
        <div>
            <div className='w-[98%] mx-auto bg-base-300  rounded-2xl mt-5'>
                <div className='w-full mx-auto max-w-4xl p-8 space-y-3 rounded-xl border-4 border-[#25CCF7] bg-white'>
                    <h1 className='text-center text-2xl md:text-3xl font-bold'>BOOK APPOINTMENT</h1>

                    <form className=' text-center'>
                       <div className='md:flex justify-around '>
                            <div>
                                <div className="space-y-1 text-base font-medium">
                                    <label htmlFor="Name" className="block text-xl font-medium">Patient Name</label>
                                    <input type="text" name="Name"  placeholder="Enter your name" className="w-full px-10 py-5 rounded-md dark:border-gray-300 dark:bg-gray-50  focus:dark:border-violet-600" />
                                </div>


                                <div className="space-y-1 text-base font-medium">
                                    <label htmlFor="Email" className="block text-xl font-medium">Email</label>
                                    <input type="text" name="Email"  placeholder="Enter your email" className="w-full px-10 py-5  rounded-md dark:border-gray-300 dark:bg-gray-50  focus:dark:border-violet-600" />
                                </div>
                            </div>
                            <div>
                                <div className="space-y-1 text-base font-medium">
                                    <label htmlFor="Date" className="block text-xl font-medium">Choose Date</label>
                                    <input type="date" name="Date"  placeholder=" Date" className="w-full px-10 py-5 rounded-md dark:border-gray-300 dark:bg-gray-50  focus:dark:border-violet-600" />
                                </div>
                                <div className="space-y-1 text-base font-medium">
                                    
                                    <PhoneInput
                                        inputProps={{
                                        name: 'number',
                                        id: 'number',
                                        className: 'w-full px-10 py-5  rounded-md dark:border-gray-300 dark:bg-gray-50  focus:dark:border-violet-600 '
                                        }}
                                        country={'bd'}
                                        value={phone}
                                        onChange={setPhone}
                                        defaultCountry="bd"
                                    />
                                </div>
                            </div>
                       </div>

                        <button type="button" className=" w-2/4 mt-3 px-8 py-3 font-semibold rounded-md dark:bg-[#25CCF7] dark:text-gray-50">Sign in</button>

                    </form>

                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Booking;