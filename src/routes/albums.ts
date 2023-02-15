import express from "express"
import { validateToken } from "../../middlewares/auth/jwt"

const router = express.Router()

/**
 * POST /album
 */
router.post('/', validateToken)

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