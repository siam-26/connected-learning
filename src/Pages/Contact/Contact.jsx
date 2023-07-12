import React from 'react';
import ContactBanner from './ContactBanner/ContactBanner';
import Get_in_touch from './Get_In_touch/Get_in_touch';

const Contact = () => {
    return (
        <div className='bg-info'>
            <ContactBanner/>
            <Get_in_touch/>
        </div>
    );
};

export default Contact;