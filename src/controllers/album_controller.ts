import { matchedData, validationResult } from "express-validator"
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { createAlbum } from "../services/album_services"
import { JwtPayload } from '../types'
import prisma from '../prisma'

/**
 * Create an album 
 */
export const postAlbum = async (req: Request, res: Response) => {
    const validationErrors = validationResult(req)
	if (!validationErrors.isEmpty()) {
		return res.status(400).send({
			status: "fail",
			data: validationErrors.array(),
		})
	}

    try {
        const album = await createAlbum({
            title: req.body.title,
            userId: req.token!.sub
        })

        res.send({
            status: "success",
            data: album,
        })

    } catch (err) {
        res.status(500).send({ status: "error", message: "Something went wrong" })
      }

}

/**
 * Get all users albums 
 */
export const getAlbums = async (req: Request, res: Response) => {
    try {
        const album = await prisma.album.findMany({
            where: {
                userId: req.token!.sub
            }
        })

        res.send({
            status: "succes",
            data: album,
        })
    } catch (err) {
        res.status(500).send({ message: "Something went wrong"})
    }
}
