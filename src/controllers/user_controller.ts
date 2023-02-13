import Debug from 'debug'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
//import { createAuthor, getAuthors } from '../services/author_service'
import prisma from '../prisma'

const debug = Debug('prisma-books:user_controller')

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
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            }
        })

        res.send({
            status: "success",
            data: {
                email: user?.email,
                first_name: user?.firstName,
                last_name: user?.lastName,
            }
        })

    } catch (err) {
        return res.status(500).send({ message: "Something went wrong" })
    }

}