import React, { useContext } from 'react'
import {observer} from 'mobx-react-lite'
import './CatalogMenu.css'
import { Context } from '../../index'

const CatalogMenu = observer(() => {
  const {game} = useContext(Context)

  return (
      <ul className='catalog-menu'>
          <h1 className='catalog-menu-title'>Каталог</h1>
          {game._genres.map(genre => 
            <li className='link' active={genre.id === game.selectedGenre.id}  onClick={() => game.setSelectedGenre(genre)} key={genre.id} >
              {genre.title}
            </li> 
            )}
      </ul>
    )
})


export default CatalogMenu