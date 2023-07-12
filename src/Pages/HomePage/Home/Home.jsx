import React from 'react';
import Header from '../Header/Header';
import HomepageImgSection from '../HomepageImgSection/HomepageImgSection';
import BestDigitalCourses from '../BestDigitalCourses/BestDigitalCourses';
import PerfectCourse from '../PerfectCourse/PerfectCourse';
import PopularTeachers from '../PopularTeachers/PopularTeachers';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Header/>
            <HomepageImgSection/>
            <BestDigitalCourses/>
            <PerfectCourse/>
            <Categories/>
            <PopularTeachers/>
        </div>
    );
};

export default Home;