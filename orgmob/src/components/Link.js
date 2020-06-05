import React from 'react';

import './Category.css';

export default function Link(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" onClick={props.onClick}>
            <div className="link">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </a>
    )
}