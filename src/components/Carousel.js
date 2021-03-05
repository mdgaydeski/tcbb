import React from 'react';
import './Carousel.css';
import picture_og from '../resources/images/tcbb_og.webp';
import picture_2dcon from '../resources//images/tcbb_2dcon.webp';
import logo from '../resources//images/tcbb_logo.webp';

const Carousel = () => {
    return (
        <div id='carousel' className='carousel slide' data-bs-ride='carousel'>
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img src={logo} className='d-block w-100' alt='Twin Cities Brass Band logo' />
                </div>
                <div className='carousel-item'>
                    <img src={picture_2dcon} className='d-block w-100' alt='Performance at 2D Con' />
                </div>
                <div className='carousel-item'>
                    <img src={picture_og} className='d-block w-100' alt="Performance featuring some of our members" />
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carousel' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true' />
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carousel' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true' />
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;