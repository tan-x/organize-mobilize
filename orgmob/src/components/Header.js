import React from 'react';

import logo from '../fist.png';
import stripe from '../redpaint.png';
import '../App.css';
import '../fonts/fonts.css'

export default function Header() {
    return(
        <div className="org-header">
            {/* <img src={stripe} className="stripe" alt="paint stripe"/> */}
            <div className="bar"></div>
            <h1 id="organize">ORGANIZE</h1>
            <img src={logo} className="App-logo" alt="fist" />
            <h1 id="mobilize">mObliZe</h1>
        </div>
    )
} 