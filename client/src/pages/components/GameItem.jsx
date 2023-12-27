import React from 'react'
import './Game.css'

const GameItem = ({game}) => {
  return (
    <div className='popular-container'>  
        <div className='popular-position' data-name={game.description} style={{backgroundImage: `url(${process.env.REACT_APP_API_URL + game.img})`}}>
            <button className='in-cart' />
        </div>
            <p id="popular-title">{game.title}</p>
            <p id="popular-price">{game.price} руб.</p>   
    </div>  
  )
}

export default GameItem