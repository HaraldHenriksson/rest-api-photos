/**
*  Validation Rules for User
*/

import { body } from 'express-validator'

export const userRules = [
    body('email').isEmail(),
    body('password').isString(),
    body('firstName').isString(),
    body('lastName').isString(),
]