import React from 'react';
import './Card.css';
import STORE from './store';

export default function Card(props) {
    return (
        <div className = 'Card'>
            <button type='button'>delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
    </div> 
    )
}
