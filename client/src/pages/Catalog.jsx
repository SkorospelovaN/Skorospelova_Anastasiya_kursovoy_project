import React, { useContext, useEffect } from 'react'
import './Catalog.css'
import CatalogMenu from './components/CatalogMenu'
import Game from './components/Game'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { fetchGames, fetchGenres } from '../http/gameAPI'

const PopularPage = observer( () => {
  const {game} = useContext(Context)

  useEffect(() => {
    fetchGenres().then(data => game.setGenres(data))
    fetchGames(null).then(data => game.setGames(data.rows))
  }, [])

  useEffect(() => {
    fetchGames(game.selectedGenre.id).then(data => {
      game.setGames(data.rows)
    })
  }, [game.selectedGenre])

  return (
    <>
    <div id="around">
      <div className='catalog-container'>
        <CatalogMenu />
        <div className='catalog-page'>
           
                <Game />
             
        </div>
      </div>
    </div>
    </>
  )
})

export default PopularPage