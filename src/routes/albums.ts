import express from "express"
import { validateToken } from "../../middlewares/auth/jwt"
import { photoIdValidation, postAlbumRules } from "../../validations/album_rules"
import { addPhoto, destroy, getAlbums, getAlbumsWithId, patchAlbum, postAlbum, removePhoto } from "../controllers/album_controller"

const router = express.Router()

/**
 * POST /album
 */
router.post('/', postAlbumRules, validateToken, postAlbum)

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
router.patch('/:albumId', postAlbumRules, validateToken, patchAlbum)

/**
 * DELETE /palbum/:photoId
 */
router.delete('/:albumId', validateToken, destroy)

/**
 * POST /album/:albumId/photos
 */
router.post('/:albumId/photos', photoIdValidation, validateToken, addPhoto)

/**
 * DELETE //album/:albumId/photos
 */
router.patch('/:albumId/photos', validateToken, removePhoto)

export default router