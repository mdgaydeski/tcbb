import React, {useState, useEffect} from 'react';
import Markdown from '../Shared/Markdown';

const MusicDirectorBio = () => {
    const [director, setDirector] = useState(null);

    const query = `
{
    musicDirectorCollection {
        items {
            name
            biography
            photo {
                description
                url
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
            
            setDirector(data.musicDirectorCollection.items[0]);
        });
    }, [query]);

    return (
        director
        ? <>
            <h3>{director.name}</h3>
            <img src={director.photo.url} alt={director.photo.description} className='rounded float-md-start m-3' width='320' height='240' />
            <Markdown input={director.biography} />
        </>
        : null
    );

}

export default MusicDirectorBio;