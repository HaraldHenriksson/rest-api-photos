/**
 * Valdiation rules for photo
 */

import { body } from 'express-validator'

export const postPhotoRules = [
    body('title').isString().isLength({ min: 3 }).withMessage('title must be at least 3 characters long').not().isEmpty().withMessage('title is required'),
    body('url').isString().isURL().withMessage('url must be a valid URL').not().isEmpty().withMessage('url is required'),
    body('comment').isString().isLength({ min: 3 }).withMessage('comment must be at least 3 characters long'),
]

export const patchPhotoRules = [
    body('title').isString().withMessage('Title must be a string').isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),
    body('url').isString().withMessage('URL must be a string').isURL().withMessage('URL must be a valid URL'),
    body('comment').optional().isString().withMessage('Comment must be a string').isLength({ min: 3 }).withMessage('Comment must be at least 3 characters long'),
]