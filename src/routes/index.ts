import express from "express"
import { validateToken } from "../../middlewares/auth/jwt"
import { getPhotos, postPhoto } from "../controllers/photo_controller"
import { login, refresh } from "../controllers/user_controller"
import photos from "./photos"
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
 * photos
 */
router.use('/photos', photos)

/**
 * POST /login
 */
router.use('/login', login)

/**
 * POST /refresh
 */
router.post('/refresh', refresh)



/**
 * [EXAMPLE] /resource
 */
// router.use('/resource', resource)

export default router
