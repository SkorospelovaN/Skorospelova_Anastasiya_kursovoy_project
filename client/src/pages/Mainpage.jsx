import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom"
import './Mainpage.css'
import about from './assets/about.svg'
import price from './assets/price.svg'
import delivery from './assets/delivery.svg'
import quality from './assets/quality.svg'
import arrow from './assets/arrow.svg'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import GameItem from './components/GameItem'
import { fetchGames, fetchGenres } from '../http/gameAPI'
import { CATALOG_ROUTE } from '../utils/consts'

const Mainpage = observer(() => {
  const {game} = useContext(Context)
  const navigate = useNavigate()

  const click = () => {
    navigate(CATALOG_ROUTE)
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    fetchGenres(2).then(data => game.setGenres(data))
    fetchGames(null).then(data => game.setGames(data.rows))
  }, [])

  return (
    <>
    <div className='about'>
      <div>
        <h1>BGUniverse</h1>
        <p>Добро пожаловать во вселенную настольных игр! Наш интернет-магазин предлагает огромный выбор игр на любой вкус и возраст. А выгодные цены, скидки и регулярные акции сделают покупку еще приятнее. Играйте с нами!</p>
        <Link to={CATALOG_ROUTE}>В каталог</Link>
      </div>
      <img src={about} />
    </div>
    <div className='pluses'>
      <div id="around">
        <h1>Наши преимущества</h1>
      </div>
      <div className='plus'>
        <div>
          <p>Доступные цены</p>
          <img src={price} />
        </div>
        <p id="number">1</p>
      </div>
      <div className='plus'>
        <div>
          <p>Быстрая доставка</p>
          <img src={delivery} />
        </div>
        <p id="number">2</p>
      </div>
      <div className='plus'>
        <div>
          <p>Высокое качество</p>
          <img src={quality} />
        </div>
        <p id="number">3</p>
      </div>
    </div>
    <div className='popular-main'>
      <div id="around">
        <h1>Популярные товары</h1>
        <div className='popular-grid'>
        {game._games.slice(0,3).map(game => 
          <GameItem key={game.id} game={game} />
        )}
        </div>
        <button className='more-popular' onClick={() => click()}>
          Увидеть больше
          <img src={arrow} />
        </button>
      </div>
    </div>
    </>
  )
})

export default Mainpage