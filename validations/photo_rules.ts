/**
 * Valdiation rules for photo
 */

import { param, body } from 'express-validator'

export const photoRules = [
    param('photoId').isInt().withMessage('photoId must be a valid integer').not().isEmpty().withMessage('photoId is required'),
]

export const postPhotoRules = [
    body('title').isString().isLength({ min: 3 }).withMessage('title must be at least 3 characters long').not().isEmpty().withMessage('title is required'),
    body('url').isString().isURL().withMessage('url must be a valid URL').not().isEmpty().withMessage('url is required'),
    body('comment').isString().isLength({ min: 3 }).withMessage('comment must be at least 3 characters long'),
]