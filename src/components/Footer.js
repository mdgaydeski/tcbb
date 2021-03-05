import React from 'react';

const Footer = () => {
    return (
        <footer className='text-light bg-dark position-absolute bottom-0 w-100 text-center'>
            &copy; {new Date().getFullYear()}
        </footer>
    );
}

export default Footer;