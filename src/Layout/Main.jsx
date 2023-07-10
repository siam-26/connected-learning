import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import FooterMain from '../Pages/Shared/Footer/FooterMain';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <FooterMain/>
        </div>
    );
};

export default Main;