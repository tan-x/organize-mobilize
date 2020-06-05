import React from 'react';

import './Category.css';
import '../fonts/fonts.css'

export default function Category(props) {
    return (
        <button className="category" title={props.title} onClick={props.onClick}>
            <h3>{props.text}</h3>
        </button>
    )
}