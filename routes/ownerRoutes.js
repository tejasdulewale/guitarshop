import express from 'express'
import ownerController from '../controllers/ownerController.js'

const router = express.Router()

const ownerRegister = router.post('/register',ownerController)

export default ownerRegister