import React from 'react';

import './Category.css';
import '../fonts/fonts.css'

export default function Category(props) {
    return (
        <div className="category">
            <h3>{props.title}</h3>
        </div>
    )
}