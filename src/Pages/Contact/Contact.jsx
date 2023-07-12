import React from 'react';
import ContactBanner from './ContactBanner/ContactBanner';
import Get_in_touch from './Get_In_touch/Get_in_touch';
import Contact_Us from './Contact_Us/Contact_Us';

const Contact = () => {
    return (
        <div className='bg-info'>
            <ContactBanner/>
            <Get_in_touch/>
            <Contact_Us/>
        </div>
    );
};

export default Contact;