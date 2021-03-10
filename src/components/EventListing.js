import React from 'react';

const EventListing = ({ event }) => {
    return (
        <div className='card'>
            {event.poster ? <img src={event.poster.url} alt={event.poster.description} className='card-image-top' /> : null}
            <h3 className='card-title'>{event.title}</h3>
            {event.performancesCollection.items.map(p => (
                <p className='card-text'>
                    {p.datetime ? p.datetime : 'Date/time TBA'}<br />
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
    );
}

export default EventListing;