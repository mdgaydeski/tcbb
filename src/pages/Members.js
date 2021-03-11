import React, {useState, useEffect} from 'react';
import MusicDirectorBio from '../components/Members/MusicDirectorBio';
import MemberListing from '../components/Members/MemberListing';

const Members = () => {
    const [memberList, setMemberList] = useState([]);

    const query = `
{
    memberCollection {
        items {
            name
            instrument {
                name
            }
            boardMember
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
            
            setMemberList(data.memberCollection.items);
        });
    }, [query]);

      return (
          <>
            <h1>Who We Are</h1>
            <h2>Music Director</h2>
            <MusicDirectorBio />
            <h2>Current Members</h2>
            {memberList.map(member => <MemberListing member={member} key={member.name} />)}
          </>
      )

}

export default Members;