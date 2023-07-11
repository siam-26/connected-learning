import React from 'react';
import CourseBanner from './CourseBanner/CourseBanner';
import OnlineCourses from './OnlineCourses/OnlineCourses';

const Course = () => {
    return (
        <div className='bg-info'>
            <CourseBanner/>
            <OnlineCourses/>
        </div>
    );
};

export default Course;