/**
*  Validation Rules for User
*/

import { body } from 'express-validator'

export const userRules = [
    body('email').isEmail(),
    body('password').isString(),
    body('first_name').isString(),
    body('last_name').isString(),
]