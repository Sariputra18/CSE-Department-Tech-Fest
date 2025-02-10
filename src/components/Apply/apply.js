import React, { useState } from 'react';
import "./apply.css"
import Countdown from '../Countdown/countdown';

const Apply = () => {
    return (
        <>
            <div className="apply-container">
                <div className="apply-title">Register Now</div>
                <Countdown />
            </div>

        </>
    );
}

export default Apply;