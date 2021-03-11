import React from 'react';
import {dateFormat} from '../../utils';

const PerformanceDetails = ({ performance }) => {
    return (
        <>
            <strong>{performance.datetime ? dateFormat(performance.datetime) : 'Date/time TBA'}</strong><br />
            {performance.location
                ? <>
                    {performance.location.name}<br />
                    {performance.location.address}<br />
                    {`${performance.location.city}, ${performance.location.state} ${performance.location.zipCode}`}
                </>
                : 'Location TBA'
            }
        </>
    )
}

export default PerformanceDetails;