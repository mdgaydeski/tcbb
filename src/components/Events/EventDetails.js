import React from 'react';
import PerformanceDetails from './PerformanceDetails';
import Markdown from '../Shared/Markdown';

const EventDetails = ({ event, modalId }) => {
    return (
        <div className='modal fade' id={modalId} aria-labelledby={`${modalId}Label`} aria-hidden='true'>
            <div className='modal-dialog modal-lg'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h2 className='modal-title'>{event.title}</h2>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='close' />
                    </div>
                    <div className='modal-body'>
                        {event.description
                            ? <>
                                <h3>About the event</h3>
                                <Markdown input={event.description} />
                            </>
                            : null
                        }
                        <h3>Performances</h3>
                        <div className='d-flex flex-wrap'>
                            {event.performancesCollection.items.map(p => (
                                <div className='flex-fill'>
                                    <PerformanceDetails performance={p} key={p.title} />
                                </div>
                            ))}
                        </div>
                        
                    </div>
                    <div className='modal-footer'>
                        <button type='button' className='btn btn-primary' data-bs-dismiss='modal'>Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails;