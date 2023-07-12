import React from 'react';
import Header from '../Header/Header';
import HomepageImgSection from '../HomepageImgSection/HomepageImgSection';
import BestDigitalCourses from '../BestDigitalCourses/BestDigitalCourses';
import PerfectCourse from '../PerfectCourse/PerfectCourse';
import PopularTeachers from '../PopularTeachers/PopularTeachers';
import Categories from '../Categories/Categories';
import What_they_say from '../What_they_say/What_they_say';

const Home = () => {
    return (
        <div>
            <Header/>
            <HomepageImgSection/>
            <BestDigitalCourses/>
            <PerfectCourse/>
            <Categories/>
            <PopularTeachers/>
            <What_they_say/>
        </div>
    );
};

export default Home;