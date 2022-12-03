import React from 'react';
import section from '../Img/section3.jpg';

const Section1 = () => (
    <div>
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={section} className=" max-w-[500px] rounded-lg shadow-2xl" alt='' />
                <div className='md:text-start'>
                    <h1 className="text-5xl font-bold">Have New Collection!</h1>
                    <p className="py-6 md:w-[80%]">The answer is simply a watch. You would turn your wrist and know how much time you have left. For such a forgetful person like me, a watch can sometimes be a lifesaver. Watches also allow you to know the time in special occasions and situations.</p>
                    <button className="btn btn-outline ">Get Started</button>
                </div>
            </div>
        </div>
    </div>
);

export default Section1;