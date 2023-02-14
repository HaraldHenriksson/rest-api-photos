import { matchedData, validationResult } from "express-validator"
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { JwtPayload } from '../types'
import prisma from '../prisma'
import { createPhoto } from "../services/photo_services"
import { validateToken } from "../../middlewares/auth/jwt"

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
            title: req.body.title,
            url: req.body.url,
            comment: req.body.comment,
            userId: req.token!.sub
          })
    
          res.send({
            status: "success",
            data: photo,
          })
      } catch (err) {
        res.status(500).send({ status: "error", message: "Something went wrong" })
      }
    }


/**
 * GET /photos
 */
export const getPhotos = async (req: Request, res: Response) => {
    try {
        const photo = await prisma.photo.findMany({
            where: {
                userId: req.token!.sub
            }
        })

        const response = photo.map(photo => {
            return {
              id: photo.id,
              title: photo.title,
              url: photo.url,
              comment: photo.comment,
            }
        })


        res.send({
            status: "success",
            data: response
        })
    } catch (err) {
        res.status(500).send({ message: "Something went wrong"})
    }
}