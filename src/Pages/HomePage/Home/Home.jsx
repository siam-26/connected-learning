import React from 'react';
import Header from '../Header/Header';
import HomepageImgSection from '../HomepageImgSection/HomepageImgSection';
import BestDigitalCourses from '../BestDigitalCourses/BestDigitalCourses';
import PerfectCourse from '../PerfectCourse/PerfectCourse';
import PopularTeachers from '../PopularTeachers/PopularTeachers';

const Home = () => {
    return (
        <div>
            <Header/>
            <HomepageImgSection/>
            <BestDigitalCourses/>
            <PerfectCourse/>
            <PopularTeachers/>
        </div>
    );
};

export default Home;