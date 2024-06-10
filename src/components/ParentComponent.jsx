import React from 'react';
import TopNavBar from './topNavBar';

function ParentComponent() {
    const handleClick = (index, path) => {
        // Handle click logic here
        console.log(`Clicked on ${path}`);
    };

    return (
        <div>
            {/* Other content */}
            <TopNavBar handleClick={handleClick} />
            {/* Other content */}
        </div>
    );
}

export default ParentComponent;
