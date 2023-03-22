import { Router } from 'express'
import { upload } from '../middlewares/uploadFiles'
import * as UserController from '../controllers/user.controller'
import * as RoomController from '../controllers/room.controller'
import * as BookController from '../controllers/book.controller'
import * as UploadController from '../controllers/upload.controller'
import * as FeedbackController from '../controllers/feedback.controller'

const router = Router()

router.get('/ping', (req, res) => {
    res.json({ pong: true })
})

router.post('/usuarios', UserController.getAll)
router.post('/usuario/:id', UserController.getById)
router.post('/usuario/registrar', UserController.createUser)
router.put('/usuario/:id', UserController.editById)
router.delete('/usuario/:id', UserController.deleteById)

router.get('/acomodacoes', RoomController.getAll)
router.get('/acomodacao/:id', RoomController.getById)
router.post('/acomodacoes', RoomController.createRoom)
router.put('/acomodacao/:id', RoomController.editById)
router.delete('/acomodacao/:id', RoomController.deleteById)

router.get('/feedbacks', FeedbackController.getAll)
router.get('/feedback/:id', FeedbackController.getById)
router.post('/feedback', FeedbackController.createFeedback)
router.put('/feedback/:id', FeedbackController.editById)
router.delete('/feedback/:id', FeedbackController.deleteById)

router.post('/reservas', BookController.getAll)

router.post('/upload', upload.single('avatar'), UploadController.sendFile)
router.post('/uploads', upload.fields([{ name: 'galeria', maxCount: 3 }]), UploadController.sendFiles)

export default router
