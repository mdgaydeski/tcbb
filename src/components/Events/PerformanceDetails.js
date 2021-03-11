import React from 'react';
import DateFormat from '../Shared/DateFormat';

const PerformanceDetails = ({ performance }) => {
    return (
        <>
            <strong>{performance.datetime ? <DateFormat date={performance.datetime} /> : 'Date/time TBA'}</strong><br />
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