import React from 'react';
import Footer from './Footer';
import FooterMedium from './FooterMedium';

const FooterMain = () => {
    return (
        <div className='bg-secondary'>
            <Footer/>
            <FooterMedium/>
        </div>
    );
};

export default FooterMain;