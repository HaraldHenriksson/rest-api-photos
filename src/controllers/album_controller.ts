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

        if (album.length === 0) {
            res.send({
                status: "success",
                message: "The user does not have any albums."
            })
        } else { res.send({
            status: "succes",
            data: album,
        })
    }
    } catch (err) {
        res.status(500).send({ message: "Something went wrong"})
    }
}

/**
 * Get albums with album id 
 */
export const getAlbumsWithId = async (req: Request, res: Response) => {
    const albumId = Number(req.params.albumId)

    try {
        const albums = await prisma.album.findMany({
            where: {
                userId: req.token!.sub
            },
            include: {
                photos: true
            }
        })
        const album = albums.find(album => album.id === albumId)

        if (!album) {
            return res.status(404).send({
                message: "Album with the given ID does not exist."
            })
        }

        res.send({
            status: "success",
            data: album
            })
    } catch (err) {
            res.status(500).send({ message: "Something went wrong"})
    }
}

/**
 * PATCH /albums/:albumId
 */
export const patchAlbum = async (req: Request, res: Response) => {
    const albumId = Number(req.params.albumId)

    try {
        const albums = await prisma.album.findMany({
            where: {
                userId: req.token!.sub
            }
        })

        const album = albums.find(album => album.id === albumId)

        if (!album) {
            return res.status(404).send({ mesage: "Album with the given ID does not exist"})
        }

        const updatedAlbum = await prisma.album.update({
            where: {
                id: albumId
            },
            data: req.body
        })

        res.send({
            status: "succes",
            data: updatedAlbum
        })

    } catch (err) {
		return res.status(500).send({ message: "Something went wrong" })
	}
}

/**
 * DELETe /albums/:albumId
 */
export const destroy = async (req: Request, res: Response) => {
    const albumId = Number(req.params.albumId)

    try {
        const albums = await prisma.album.findMany({
            where: {
                userId: req.token!.sub
            }
        })

        const album = albums.find(album => album.id === albumId)

        if (!album) {
            return res.status(404).send({ message: "Photo with given ID does not exist"})
        }

        const deletedAlbum = await prisma.album.delete({
            where: {
                id: albumId,
            }
        })

        res.send({
            status: "success",
            data: null
        })

    } catch (err) {
        res.status(500).send({ message: "Something went wrong"})
    }
}

/**
 * Link a photo to an album 
 */
export const addPhoto = async (req: Request, res: Response) => {
    console.log("photo to connect:", req.body.photo_id)

    try {
        const result = await prisma.album.update({
            where: {
                id: Number(req.params.albumId),
            },
            data: {
                photos: {
                    connect: {
                        id: req.body.photo_id
                    }
                }
            },
            include: {
                photos: true,
            }
        })
        
        res.send({
            status: "success",
            data: null
        })

    } catch (err) {
        res.status(500).send({ status: "error", message: "something went wrong"})
    }
}