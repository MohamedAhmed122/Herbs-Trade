import React, { Fragment } from 'react';
import HeroHome from '../../Components/HomeComponets/HomeHero/HomeHero';
import HomeBaseOverview from '../../Components/HomeComponets/HomeOverview/HomeBaseOverview';
import HomeText from '../../Components/HomeComponets/HomeFeatures/HomeText';
import HomeFeatures from '../../Components/HomeComponets/HomeFeatures/HomeFeatures';


const HomePage =()=>(
    <Fragment>
        <HeroHome />
        <HomeBaseOverview />
        <HomeFeatures />
        <HomeText />
    </Fragment>
)
export default HomePage