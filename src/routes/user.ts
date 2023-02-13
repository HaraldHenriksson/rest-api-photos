import express from 'express'
import { body } from 'express-validator'
import { userRules } from '../../validations/user_rules'
import { store } from '../controllers/user_controller'
const router = express.Router()


/**
 * POST /user 
 */
router.post('/register', userRules, store)