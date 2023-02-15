/**
*  Validation Rules for User
*/

import { body } from 'express-validator'

export const userRules = [
    body('email').isEmail().withMessage('Email must be a valid email address').notEmpty().withMessage('Email is required'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long').notEmpty().withMessage('Password is required'),
    body('first_name').isLength({min: 3}).withMessage('First name must be at least 3 characters long').notEmpty().withMessage('First name is required'),
    body('last_name').isLength({min: 3}).withMessage('Last name must be at least 3 characters long').notEmpty().withMessage('Last name is required'),
]

export const loginRules = [
    body('email').isEmail().withMessage('Invalid email address').not().isEmpty().withMessage('Email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').not().isEmpty().withMessage('Password is required'),
]