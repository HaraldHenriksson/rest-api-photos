import Debug from 'debug'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
//import { createAuthor, getAuthors } from '../services/author_service'
import prisma from '../prisma'

/**
 * Create a user
 */
export const store = async (req: Request, res: Response) => {

    const validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) {
        return res.status(400).send({
            status: "fail",
            data: validationErrors.array()
        })
    }
    try {
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                password: req.body.password,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
            }
        })

        res.send({
            status: "success",
            data: {
                email: user?.email,
                first_name: user?.first_name,
                last_name: user?.last_name,
            }
        })

    } catch (err) {
        return res.status(500).send({ message: "Something went wrong" })
    }

}