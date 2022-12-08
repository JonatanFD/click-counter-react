import React from 'react';
import { useState } from 'react';
import Display from './Display';
import Button from './Button';
import fccLogo from './pics/freeCodeCamp-logo.png';
import './css/App.css';

export default function App() {
    const [totalClick, setTotalClick] = useState(0);

    const clickButtonAction = () => {
        setTotalClick(totalClick + 1);
    };
    const restartButtonAction = () => {
        setTotalClick(0);
    };
    const subtractButtonAction = () => {
        if (totalClick === 0) {
            setTotalClick(totalClick - 1);
        }
    };

    return (
        <div className="main-container">
            <div className="header">
                <img src={fccLogo} alt="freecodecamp-logo.png" />
            </div>

            <div className="display">
                <Display nroClicks={totalClick} />
            </div>

            <div className="buttons">
                <Button 
                    text="ADD" 
                    action={clickButtonAction} 
                    buttonType="c" 
                />
                <Button
                    text="RESTART"
                    action={restartButtonAction}
                    buttonType="r"
                />
                <Button
                    text="SUBTRACT"
                    action={subtractButtonAction}
                    buttonType="s"
                />
            </div>
        </div>
    );
}
