import React from 'react';
import card1 from '../Img/13.png';
import card2 from '../Img/8.png';
import card3 from '../Img/bvf.jpg';

const Cards = () => {
    return (
        <div className='flex justify-center my-[70px]'>
            <div className="card w-96 bg-base-100 shadow-xl image-full p-[7px] mx-auto">
                <figure><img src={card1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white text-[35px] mb-[130px]">Man</h2>

                    <div className="card-actions justify-end">
                        <button className="btn btn-outline text-white">See More</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full p-[7px] mx-auto">
                <figure><img src={card2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white text-[35px] mb-[130px]">Woman</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline text-white">See More</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full p-[7px] mx-auto">
                <figure><img src={card3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white text-[35px] mb-[130px]">Smart</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline text-white">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;