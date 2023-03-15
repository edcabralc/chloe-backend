import { Router } from 'express'
import { upload } from '../middlewares/uploadFiles'
import * as UserController from '../controllers/user.controller'
import * as RoomController from '../controllers/room.controller'
import * as BookController from '../controllers/book.controller'
import * as UploadController from '../controllers/upload.controller'

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

router.post('/upload', upload.single('avatar'), UploadController.sendFile)
// router.post('/uploads' UploadController.sendFiles)

export default router
