import React from 'react';
import banner1 from '../Img/1banner.png';
import banner2 from '../Img/2banner.png';
import banner3 from '../Img/3banner.png';

const Carousel = () => {
    return (<div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full md:h-[450px]">
            <img src={banner1} className="w-full" alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full md:h-[500px]">
            <img src={banner2} className="w-full" alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full md:h-[500px]">
            <img src={banner3} className="w-full" alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
    );
};

export default Carousel;