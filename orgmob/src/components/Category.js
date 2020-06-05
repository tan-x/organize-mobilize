import React from 'react';

import logo from '../fist.png';
import stripe from '../redpaint.png';
import './Category.css';
import '../fonts/fonts.css'

export default function Category(props) {
    return (
        <div className="category">
            <h3>{props.category}</h3>
        </div>
    )
}