import { Router } from 'express'
import * as UserController from '../controllers/userController'
import * as RoomController from '../controllers/roomController'

const router = Router()

router.get('/ping', (req, res) => {
    res.json({ pong: true })
})

router.get('/usuarios', UserController.all)
router.get('/acomodacoes', RoomController.all)

export default router
