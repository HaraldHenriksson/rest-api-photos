import prisma from '../prisma'
import { CreateAlbum } from '../types'

export const createAlbum = async (data: CreateAlbum) => {
    return await prisma.album.create({
        data: {
            title: data.title,
            userId: data.userId
        }
    })
}