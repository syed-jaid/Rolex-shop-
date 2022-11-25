import React from 'react';
import Cards from './HomePart/Cards';
import Carousel from './HomePart/Carousel';
import Section1 from './HomePart/Section1';

const Home = () => {
    return (
        <div>
            <Carousel />
            <Cards />
            <Section1 />
        </div>
    );
};

export default Home;