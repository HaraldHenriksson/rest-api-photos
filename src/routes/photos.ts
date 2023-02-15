import express from "express"
import { validateToken } from "../../middlewares/auth/jwt"
import { patchPhotoRules, photoRules, postPhotoRules } from "../../validations/photo_rules"
import { destroy, getPhotos, getPhotoWithId, patchPhoto, postPhoto } from "../controllers/photo_controller"

const router = express.Router()

/**
 * POST /photo
 */
router.post('/', postPhotoRules, validateToken, postPhoto)

/**
 * GET /photos
 */
router.get('/', validateToken, getPhotos)

/**
 * GET /photo/:id
 */
router.get('/:photoId', photoRules, validateToken, getPhotoWithId)

/**
 * PATCH /photos/:photoId
 */
router.patch('/:photoId', patchPhotoRules, validateToken, patchPhoto)

/**
 * DELETE /photos/:photoId
 */
router.delete('/:photoId', validateToken, destroy)

export default router