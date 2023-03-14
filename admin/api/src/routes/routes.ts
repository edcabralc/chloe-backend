import { Router } from 'express'
import * as UserController from '../controllers/userController'
import * as RoomController from '../controllers/roomController'
import * as BookController from '../controllers/bookController'

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
router.get('/acomodacao/:id', RoomController.getById)
router.put('/acomodacao/editar/:id', RoomController.editById)
router.delete('/acomodacao/remover/:id', RoomController.deleteById)

router.post('/reservas', BookController.getAll)

export default router
