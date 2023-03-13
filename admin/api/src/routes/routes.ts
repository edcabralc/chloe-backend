import { Router } from 'express'
import * as UserController from '../controllers/userController'
import * as RoomController from '../controllers/roomController'

const router = Router()

router.get('/ping', (req, res) => {
    res.json({ pong: true })
})

router.get('/usuarios', UserController.getAll)
router.post('/usuario/:id', UserController.getById)
router.put('/usuario/:id', UserController.editById)
router.delete('/usuario/remover/:id', UserController.deleteById)

router.get('/acomodacoes', RoomController.getAll)
router.get('/acomodacoes/:id', RoomController.getById)
router.put('/acomodacoes/:id', RoomController.editById)
router.delete('/acomodacoes/remover/:id', RoomController.deleteById)

export default router
