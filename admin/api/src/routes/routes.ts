import { Router } from 'express'
import * as UserController from '../controllers/userController'
import * as RoomController from '../controllers/roomController'

const router = Router()

router.get('/ping', (req, res) => {
    res.json({ pong: true })
})

router.post('/usuarios', UserController.getAll)
router.post('/usuario/registrar', UserController.createUser)
router.post('/usuario/:id', UserController.getById)
router.put('/usuario/editar/:id', UserController.editById)
router.delete('/usuario/remover/:id', UserController.deleteById)

router.get('/acomodacoes', RoomController.getAll)
router.get('/acomodacoes', RoomController.getAll)

export default router
