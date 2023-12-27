const uuid = require('uuid')
const path = require('path')
const {Game} = require('../models/models')
const ApiError = require('../error/ApiError')

class GameController {
    async create(req,res, next){
        try {
            const {title, price, genreId, description} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
        
            const game = await Game.create({title, price, genreId, description, img: fileName})
        
            return res.json(game)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
   
    }

    async getAll(req,res){
        let {genreId, limit, page} = req.query
        page = page || 1
        limit = limit || 20
        let offset = page * limit - limit
        let games;
        if (!genreId) {
            games = await Game.findAndCountAll()
        }
        if (genreId) {
            games = await Game.findAndCountAll({where: {genreId}, limit, offset})
        }
        return res.json(games)
    }

    async getOne(req,res){
        const {id} = req.params
        const game = await Game.findOne({where: {id}}, )
        return res.json(game)
    }
}

module.exports = new GameController()