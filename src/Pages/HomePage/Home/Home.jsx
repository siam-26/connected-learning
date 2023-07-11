import React from 'react';
import Header from '../Header/Header';
import HomepageImgSection from '../HomepageImgSection/HomepageImgSection';
import BestDigitalCourses from '../BestDigitalCourses/BestDigitalCourses';

const Home = () => {
    return (
        <div>
            <Header/>
            <HomepageImgSection/>
            <BestDigitalCourses/>
        </div>
    );
};

export default Home;