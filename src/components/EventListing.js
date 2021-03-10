import React from 'react';
import './EventListing.css';

const EventListing = ({ event }) => {
    return (
        <article className='card rounded-2 p-2 mb-3'>
            {event.poster ? <img src={event.poster.url} alt={event.poster.description} className='card-image-top' /> : null}
            <div className='card-body'>
                <h3 className='card-title'>{event.title}</h3>
                {event.performancesCollection.items.map(p => (
                    <p className='card-text'>
                        <strong>{p.datetime ? p.datetime : 'Date/time TBA'}</strong><br />
                        {p.location
                            ? <>
                                {p.location.name}<br />
                                {p.location.address}<br />
                                {`${p.location.city}, ${p.location.state} ${p.location.zipCode}`}
                            </>
                            : 'Location TBA'
                        
                        }<br />
                    
                        {p.livestreamUrl ? <a href={p.livestreamUrl} className='btn btn-primary' target='_blank' rel='noreferrer'>Watch live</a> : null}
                    </p>
                ))}
            </div>
        </article>
    );
}

export default EventListing;