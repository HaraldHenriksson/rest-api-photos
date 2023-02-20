/**
*  Validation Rules for Album
*/

import { body } from 'express-validator'

export const postAlbumRules = [
    body('title').isString().isLength({ min: 3 }).withMessage('title must be at least 3 characters long').not().isEmpty().withMessage('title is required')
]

  export const photoIdValidation = [
    body('photo_id').not().isEmpty().withMessage('photo_id is required')
  ]