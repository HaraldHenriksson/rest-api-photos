import express from "express"
import { postPhoto } from "../controllers/photo_controller"

const router = express.Router()

/**
 * POST /photo
 */

router.post('/', postPhoto)

export default router