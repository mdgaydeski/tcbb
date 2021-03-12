import React from 'react';
import './MemberListing.css';

const MemberListing = ({ member }) => {
    return (
        <div className='card text-center mb-3'>
            {member.name}{member.boardMember ? '*' : null}<br />
            {member.instrument.name}
        </div>
    )
}

export default MemberListing;