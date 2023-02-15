import express from "express"
import { validateToken } from "../../middlewares/auth/jwt"
import { postAlbum } from "../controllers/album_controller"

const router = express.Router()

/**
 * POST /album
 */
router.post('/', validateToken, postAlbum)

/**
 * GET /album
 */
router.get('/', validateToken)

/**
 * GET /album/:albumId
 */
router.get('/:albumId', validateToken)

/**
 * PATCH /album/:photoId
 */
router.patch('/:albumId', validateToken)

/**
 * DELETE /palbum/:photoId
 */
router.delete('/:albumId', validateToken)

export default router