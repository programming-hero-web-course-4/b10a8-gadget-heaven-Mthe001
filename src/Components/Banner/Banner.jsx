import React from 'react';

import BannerPhoto from '../Banner-photo/BannerPhoto';

const Banner = () => {
    return (
        <div className='w-[90%] mx-auto '>
            <div className='bg-violet-600 w-[90%] mx-auto rounded-xl mt-3 lg:h-[550px] h-[500px]  md:h-[600px]'>
                {/* title */}
                <div className='text-slate-50 text-start  md:text-center lg:text-center'>
                    <p className='lg:text-5xl md:text-4xl text-2xl font-semibold p-9'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</p>

                    <p className='text-xl mx-auto w-[80%] py-5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                {/* button */}
                <div className='flex items-center justify-center'>
                    <button className='px-6 py-2 bg-white rounded-full font-semibold text-violet-800 '>Shop Now</button>
                </div>
            </div>
            <BannerPhoto></BannerPhoto>
        </div>

    );
};

export default Banner;