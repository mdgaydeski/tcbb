import React from 'react';
import './EventPoster.css';

const EventPoster = ({ poster, slug }) => {
    const modalId = `modal-${slug}`;

    return (
        <>
            <img src={poster.url} alt={poster.description} className='card-image-top' data-bs-toggle='modal' data-bs-target={`#${modalId}`} />
        
            <div className='modal fade' id={modalId} aria-labelledby={`${modalId}Label`} aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='close' />
                        </div>
                        <div className='modal-body'>
                            <img src={poster.url} alt={poster.description} className='modal-image' />
                        </div>
                        <div className='modal-footer' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventPoster;