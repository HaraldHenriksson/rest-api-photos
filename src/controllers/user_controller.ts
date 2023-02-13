import Debug from 'debug'
import { Request, Response } from 'express'
import { matchedData, validationResult } from 'express-validator'
//import { createAuthor, getAuthors } from '../services/author_service'
import prisma from '../prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JwtPayload } from '../types'

const debug = Debug('prisma-books:user_controller')

/**
 * Create a user
 */
export const register = async (req: Request, res: Response) => {

    const validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationErrors.array()
        })
    }

    const validatedData = matchedData(req)
        const hashedPassword = await bcrypt.hash(validatedData.password, Number(process.env.SALT_ROUNDS || 10))
        validatedData.password = hashedPassword

    try {
        const user = await prisma.user.create({
            data: {
                email: validatedData.email,
                password: validatedData.password,
                first_name: validatedData.first_name,
                last_name: validatedData.last_name,
            }
        })

        res.status(201).send({ status: "success", data: {
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
        } })

    } catch (err) {
        return res.status(500).send({ message: "Could not create user" })
    }

}

/**
 * Login a user
 */
export const login = async (req: Request, res: Response) => {
}