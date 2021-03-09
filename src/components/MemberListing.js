import React from 'react';

const MemberListing = ({ member }) => {
    return (
        <div className='card'>
            <p>{member.name}{member.boardMember ? '*' : null}</p>
            <p>{member.instrument.name}</p>
        </div>
    )
}

export default MemberListing;