import { matchedData, validationResult } from "express-validator"
import { Request, Response } from 'express'
import prisma from '../prisma'
import { createPhoto } from "../services/photo_services"

/**
 * POST /photos
 */
export const postPhoto = async (req: Request, res: Response) => {
    const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).send({
			status: "fail",
			data: validationErrors.array(),
		})
	}

    const validatedData = matchedData(req)

    
    try {
        const photo = await createPhoto({
            title: validatedData.title,
            url: validatedData.url,
            comment: validatedData.comment,
            userId: Number(validatedData.userId)
        })

        res.send({
			status: "success",
			data: photo,
		})

    } catch (err) {
		res.status(500).send({ status: "error", message: "Something went wrong" })
    }
}