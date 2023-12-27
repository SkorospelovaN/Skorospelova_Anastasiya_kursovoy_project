import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../..'
import GameItem from './GameItem'

const Popular = observer(() => {
  const {game} = useContext(Context)

  return (
    <> 
    {game._games.map(game => 
      <GameItem key={game.id} game={game} />
    )}
    </>    
  )
})

export default Popular