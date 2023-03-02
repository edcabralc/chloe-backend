import { Router } from 'express'
import * as UserController from '../controllers/userController'

const router = Router()

router.get('/ping', (req, res) => {
    res.json({ pong: true })
})

router.get('/usuarios', UserController.all)

export default router
