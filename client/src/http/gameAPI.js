import { $authHost, $host } from "./index";
import {jwtDecode as jwt_decode} from 'jwt-decode'

export const createGenre = async (genre) => {
    const {data} = await $authHost.post('api/genre', genre)
    return data
}

export const fetchGenres = async () => {
    const {data} = await $host.get('api/genre')
    return data
}

export const createGame = async (game) => {
    const {data} = await $authHost.post('api/game', game)
    return data
}

export const fetchGames = async (genreId) => {
    const {data} = await $host.get('api/game', {params: {genreId}})
    return data
}