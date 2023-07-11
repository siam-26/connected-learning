import React from 'react';
import Header from '../Header/Header';
import HomepageImgSection from '../HomepageImgSection/HomepageImgSection';
import BestDigitalCourses from '../BestDigitalCourses/BestDigitalCourses';
import PerfectCourse from '../PerfectCourse/PerfectCourse';

const Home = () => {
    return (
        <div>
            <Header/>
            <HomepageImgSection/>
            <BestDigitalCourses/>
            <PerfectCourse/>
        </div>
    );
};

export default Home;