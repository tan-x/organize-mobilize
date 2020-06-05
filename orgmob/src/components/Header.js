import React from 'react';

import logo from '../fist.png';
import stripe from '../redpaint.png';
import '../App.css';
import '../fonts/fonts.css'

export default function Header() {
    return(
        <div className="org-header">
            <img src={stripe} className="stripe" />
            <h1 id="organize">Organize</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 id="mobilize">Moblize</h1>
        </div>
    )
} 