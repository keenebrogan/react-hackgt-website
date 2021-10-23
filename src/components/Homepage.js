import React from 'react'
import '../App.css';
import { Button } from './Button'
import './Homepage.css';

function Homepage() {
    return (
        <div className='homepage-container'>
            <h1>SPOTLIGHT</h1>
            <h2>SLOGAN SLOGAN SLOGAN Slogan</h2>
            <div className="hero-btns">
                <Button className='btns' buttonStyle = 'btn--outline'
                buttonSize = 'btn--large'>SIGN UP
                </Button>
                <Button className='btns' buttonStyle = 'btn--primary'
                buttonSize = 'btn--large'>LOG IN<i className = 'far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default Homepage
