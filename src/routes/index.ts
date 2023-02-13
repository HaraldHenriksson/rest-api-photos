import express from "express"
import { login } from "../controllers/user_controller"
import user from './user'
import resource from './_router'

// instantiate a new router
const router = express.Router()

/**
 * GET /
 */
router.get('/', (req, res) => {
	res.send({
		message: "I AM API, BEEP BOOP",
	})
})

/**
 * POST /register
 */
router.use('/register', user)

/**
 * POST /login
 */
router.use('/login', login)

/**
 * [EXAMPLE] /resource
 */
// router.use('/resource', resource)

export default router
