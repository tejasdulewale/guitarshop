import express from 'express'
import  { ownerRegister, ownerLogin }from '../controllers/ownerController.js'

const router = express.Router()

const ownerRegister = router.post('/register',ownerRegister)
const ownerLogin = router.post('/login',ownerLogin)

export default {ownerRegister,ownerLogin}