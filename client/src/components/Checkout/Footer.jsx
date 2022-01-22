import React from 'react';
import Company from './Company';
import Contact from './Contact';
import Legal from './Legal';
import Store from './Store';

const Footer = () => {
    return (
        <>
        <div className='footer'>
            <Company/>
            <Contact/>
            <Legal/>
            <Store/>
        </div>
        </>
    );
};

export default Footer;