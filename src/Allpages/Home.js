import React from 'react';
import Cards from './HomePart/Cards';
import Carousel from './HomePart/Carousel';
import Products from './HomePart/Products';
import Section1 from './HomePart/Section1';

const Home = () => {
    return (
        <div className='max-w-[1250px] mx-auto'>
            <Carousel />
            <Cards />
            <Section1 />
            <Products />
        </div>
    );
};

export default Home;