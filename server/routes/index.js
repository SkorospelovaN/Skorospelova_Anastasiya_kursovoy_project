const Router = require('express')
const router = new Router()
const gameRouter = require('./gameRouter')
const genreRouter = require('./genreRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/genre', genreRouter)
router.use('/game', gameRouter)

module.exports  = router