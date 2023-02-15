import express from "express"
import { validateToken } from "../../middlewares/auth/jwt"
import { destroy, getAlbums, getAlbumsWithId, patchAlbum, postAlbum } from "../controllers/album_controller"

const router = express.Router()

/**
 * POST /album
 */
router.post('/', validateToken, postAlbum)

/**
 * GET /album
 */
router.get('/', validateToken, getAlbums)

/**
 * GET /album/:albumId
 */
router.get('/:albumId', validateToken, getAlbumsWithId)

/**
 * PATCH /album/:photoId
 */
router.patch('/:albumId', validateToken, patchAlbum)

/**
 * DELETE /palbum/:photoId
 */
router.delete('/:albumId', validateToken, destroy)

export default router