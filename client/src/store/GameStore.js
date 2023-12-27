import {makeAutoObservable} from 'mobx'

export default class GameStore {
    constructor() {
        this._genres = []
        this._games = []
        this._selectedGenre = {}
        makeAutoObservable(this)
    }

    setGenres(genres){
        this._genres = genres
    }

    setGames(games){
        this._games = games
    }

    setSelectedGenre(genre){
        this._selectedGenre = genre
    }

    get Genres() {
        return this._genres
    }

    get Games(){
        return this._games
    }

    get selectedGenre(){
        return this._selectedGenre
    }
}