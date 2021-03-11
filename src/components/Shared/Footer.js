import React from 'react';
import icon_facebook from '../../resources/icons/icon_facebook.png';
import icon_instagram from '../../resources/icons/icon_instagram.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='text-light bg-dark position-absolute bottom-0 w-100 d-flex justify-content-between'>
            <div />
            <div>
                &copy; {new Date().getFullYear()} Twin Cities Brass Band
            </div>
            <div>
                <a href='https://www.facebook.com/twincitiesbrassband/' target='_blank' rel='noreferrer'>
                    <img src={icon_facebook} alt='Facebook icon' className='icon' />
                </a>
                <a href='https://www.instagram.com/twincitiesbrassband/' target='_blank' rel='noreferrer'>
                    <img src={icon_instagram} alt='Instagram icon' className='icon' />
                </a>
            </div>
        </footer>
    );
}

export default Footer;