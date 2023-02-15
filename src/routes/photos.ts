import express from "express"
import { validateToken } from "../../middlewares/auth/jwt"
import { destroy, getPhotos, getPhotoWithId, patchPhoto, postPhoto } from "../controllers/photo_controller"

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

/**
 * PATCH /photos/:photoId
 */
router.patch('/:photoId', validateToken, patchPhoto)

/**
 * DELETE /photos/:photoId
 */
router.delete('/:photoId', validateToken, destroy)

export default router