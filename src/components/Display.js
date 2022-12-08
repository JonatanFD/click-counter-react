import React from 'react';

export default function Display({ nroClicks }) {
    return (
        <div 
            className="display-container"
        >
            {nroClicks}
        </div>
    );
}
