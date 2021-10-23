import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className = 'cards'>
            <h1>Check out these AWESOME people!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className = "cards__items">
                        <CardItem
                        src = "images/img1.jpg"
                        text = "Explore the hidden problemspace!"
                        label = 'Adventure'
                        path = 'Services'
                        />
                        <CardItem
                        src = "images/img2.jpg"
                        text = "Explore the hidden problemspace!"
                        label = 'Adventure'
                        path = 'Services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
