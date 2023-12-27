import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._role = {}
        this._user = {}
        this._users = []
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    setRole(role){
        this._role = role
    }

    setUser(user){
        this._user = user
    }

    setUsers(users){
        this._users = users
    }

    get isAuth() {
        return this._isAuth
    }

    get role(){
        return this._role
    }

    get user(){
        return this._user
    }

    get users(){
        return this._users
    }
}