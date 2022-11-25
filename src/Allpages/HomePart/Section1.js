import React from 'react';

const Section1 = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" className="rounded-lg shadow-2xl" alt='' />
                    <div className='md:text-start'>
                        <h1 className="text-5xl font-bold">Have New !</h1>
                        <p className="py-6 md:w-[70%]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;