import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'
import { createGame, fetchGenres, fetchGames } from '../../http/gameAPI'
import './CreateGame.css'

const CreateGame = observer( () => {
    const {game} = useContext(Context)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState(null)
    const [genre, setGenre] = useState(0)


    const selectPhoto = e => {
        setPhoto(e.target.files[0])
    }

useEffect(() => {
    fetchGenres().then(data => game.setGenres(data))
  }, [])

  const addGame = () => {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('price',`${price}`)
    formData.append('description', description)
    formData.append('img', photo)
    formData.append('genreId', `${genre}`)
    createGame(formData).then(data => console.log(data))
  }

  const handleSubmit = event => {
    event.preventDefault();

  };

  return (
    <form onSubmit={handleSubmit} className='add-game'>
      <h1>Добавить товар</h1>
        <input type="text" placeholder='Введите название...' value={title} onChange={e => setTitle(e.target.value)}/>
        <input type="number"  placeholder='Введите стоимость...' value={price} onChange={e => Number(setPrice(e.target.value))}/>
        <input type="text" placeholder='Введите описание...' value={description} onChange={e => setDescription(e.target.value)}/>
        <input type="file" placeholder='Выберите фото...' onChange={selectPhoto}/>
        <select value={genre} onChange={e => Number(setGenre(e.target.value))}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
        </select>
        <button onClick={addGame}>Добавить</button>
    </form>
  )
})

export default CreateGame