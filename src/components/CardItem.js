import React from 'react'
import { Link } from 'react-router-dom'
function CardItem() {
    return (
        <div>
            <li className="cards_item"></li>
                <Link className="cards__item__link">
                    <figure className="cards__item__pic-wrap">
                        <img src = "/" alt = "Travel Image"
                        className = "cards__item__img"/>


                    </figure>
                    <div className = "cards__item"info>
                        <h5 className='cards__item__text' />
                    </div>
                </Link>
            
        </div>
    )
}

export default CardItem
