import express from "express"
import { validateToken } from "../../middlewares/auth/jwt"
import { getPhotos, getPhotoWithId, postPhoto } from "../controllers/photo_controller"

const router = express.Router()

/**
 * POST /photo
 */
router.post('/', validateToken, postPhoto)

/**
 * GET /photos
 */
router.get('/', validateToken, getPhotos)

/**
 * GET /photo/:id
 */
router.get('/:photoId', validateToken, getPhotoWithId)

export default router