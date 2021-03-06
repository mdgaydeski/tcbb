import React, {useState, useEffect} from 'react';
import EventListing from '../components/Events/EventListing';
import {orderEventsByDate} from '../utils';

const Events = () => {
    const [eventList, setEventList] = useState([]);

    const query = `
{
    eventCollection {
        items {
            title
            description
            eventType
            poster {
                description
                url
            }
            performancesCollection (limit: 10) {
                items {
                    title
                    location {
                        name
                        address
                        city
                        state
                        zipCode
                    }
                    datetime
                    livestreamUrl
                    sys {
                        id
                    }
                }
            }
            sys {
                id
            }
        }
    }
}
    `;

    useEffect(() => {
        fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_ID}/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
            body: JSON.stringify({ query }),
          })
        .then((response) => response.json())
        .then(({ data, error }) => {
            if (error) {
              console.error(error);
            }
            
            setEventList(data.eventCollection.items);
        });
    }, [query]);

    const upcomingEvents = eventList.filter(e => e.performancesCollection.items.some(p => p.datetime === null || new Date(p.datetime) >= new Date()));
    const concerts = orderEventsByDate(upcomingEvents.filter(e => e.eventType === 'Concert'));
    const otherEvents = orderEventsByDate(upcomingEvents.filter(e => e.eventType === 'Other Event'))

    return (
        <>
            <h1>Events</h1>
            <h2>Upcoming Concerts</h2>
            <div className='d-flex flex-wrap justify-content-around'>
                {concerts.map(e => <EventListing event={e} key={e.title} />)}
            </div>
            <h2>Other Events</h2>
            <div className='d-flex flex-wrap justify-content-around'>
                {otherEvents.map(e => <EventListing event={e} key={e.title} />)}
            </div>
            
        </>
    );
}

export default Events;