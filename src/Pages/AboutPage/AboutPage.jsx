import React, { Fragment } from 'react';
import AboutHero from '../../Components/AboutComponents/AboutHero/AboutHero';
import History from '../../Components/AboutComponents/AboutHero/History';
import AboutTech from '../../Components/AboutComponents/Features/Features';


const AboutPage =() =>(
    <Fragment>
        <AboutHero />
        <History />
        <AboutTech />
    </Fragment>
)

export default AboutPage