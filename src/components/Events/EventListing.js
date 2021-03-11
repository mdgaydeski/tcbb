import React from 'react';
import EventPoster from './EventPoster';
import DateFormat from '../Shared/DateFormat';
import './EventListing.css';

const EventListing = ({ event }) => {
    return (
        <article className='card rounded-2 p-2 mb-3'>
            {event.poster != null ? <EventPoster poster={event.poster} slug={event.slug} /> : null}
            <div className='card-body'>
                <h3 className='card-title'>{event.title}</h3>
                {event.performancesCollection.items.map(p => (
                    <div className='card-text mb-2'>
                        <strong>{p.datetime ? <DateFormat date={p.datetime} /> : 'Date/time TBA'}</strong><br />
                        {p.location
                            ? <>
                                {p.location.name}<br />
                                {p.location.address}<br />
                                {`${p.location.city}, ${p.location.state} ${p.location.zipCode}`}
                            </>
                            : 'Location TBA'
                        }<br />
                        <div className='d-flex justify-content-center my-1'>
                            {p.livestreamUrl ? <a href={p.livestreamUrl} className='btn btn-primary w-50' target='_blank' rel='noreferrer'>Watch live</a> : null}   
                        </div>
                    </div>
                ))}
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary w-50'>Details</button>
                </div>
                
            </div>
        </article>
    );
}

export default EventListing;