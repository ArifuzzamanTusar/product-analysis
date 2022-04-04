import React from 'react';
import Herosection from '../../Templates/Sections/Herosection';
import Homereview from '../../Templates/Sections/Homereview';


const Home = () => {
    return (
        <div className='home-page single-page'>
           <Herosection></Herosection>
           <Homereview></Homereview>
        </div>
    );
};

export default Home;