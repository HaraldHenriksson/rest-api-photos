import express from 'express'
import { body } from 'express-validator'
import { loginRules, userRules } from '../../validations/user_rules'
import { register, login, refresh } from '../controllers/user_controller'
const router = express.Router()


/**
 * POST /user 
 */
router.post('/', userRules, register)

/**
 * POST /login
 */
router.post('/', loginRules, login)

/**
 * POST /refresh
 */
router.post('/', refresh)

export default router