import React, {useState, useEffect} from 'react';
import EventListing from '../components/Events/EventListing';

const Events = () => {
    const [eventList, setEventList] = useState([]);

    const query = `
{
    eventCollection {
        items {
            title
            slug
            eventType
            poster {
                description
                url
                width
                height
            }
            performancesCollection (limit: 10) {
                items {
                    location {
                        name
                        address
                        city
                        state
                        zipCode
                    }
                    datetime
                    livestreamUrl
                }
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

    return (
        <>
            <h1>Events</h1>
            <div className='d-flex flex-wrap justify-content-around'>
                {eventList.map(e => <EventListing event={e} key={e.title} />)}
            </div>
            
        </>
    );
}

export default Events;