import React from 'react';

const AppHeader = ({liked, count}) => {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <h1>Simon Kush</h1>
            <h2 className="text-secondary">{`${count} at all, liked are ${liked}`}</h2>
        </div>
    )
}

export default AppHeader;