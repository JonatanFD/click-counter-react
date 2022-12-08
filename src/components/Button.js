import React from 'react';
import './css/Button.css';

export default function Button({ text, action, buttonType }) {
    return (
        <button
            className={
                buttonType === 'c'
                    ? 'clickButton'
                    : buttonType === 'r'
                    ? 'restartButton'
                    : buttonType === 's'
                    ? 'subtractButton'
                    : 'exceptionButton'
            }
            onClick={action}
        >
            {text}
        </button>
    );
}
