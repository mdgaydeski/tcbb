import React from 'react';
import EventPoster from './EventPoster';
import EventDetails from './EventDetails';
import PerformanceDetails from './PerformanceDetails';
import './EventListing.css';

const EventListing = ({ event }) => {
    const detailsModalId = `modal-${event.sys.id}-details`;

    return (
        <article className='card rounded-2 p-2 mb-3'>
            {event.poster != null ? <EventPoster poster={event.poster} id={event.sys.id} /> : null}
            <div className='card-body'>
                <h3 className='card-title'>{event.title}</h3>
                {event.performancesCollection.items.map(p => (
                    <div className='card-text mb-2' key={p.sys.id}>
                        <PerformanceDetails performance={p} /><br />
                        <div className='d-flex justify-content-center my-1'>
                            {p.livestreamUrl ? <a href={p.livestreamUrl} className='btn btn-primary w-50' target='_blank' rel='noreferrer'>Watch live</a> : null}   
                        </div>
                    </div>
                ))}
                <div className='d-flex justify-content-center'>
                    <button type='button' className='btn btn-primary w-50' data-bs-toggle='modal' data-bs-target={`#${detailsModalId}`}>Details</button>
                    <EventDetails event={event} modalId={detailsModalId} />
                </div>
                
            </div>
        </article>
    );
}

export default EventListing;