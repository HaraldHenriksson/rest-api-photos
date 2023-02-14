import prisma from '../prisma'
import { CreatePhoto, JwtPayload } from '../types'

export const createPhoto = async (data: CreatePhoto) => {
    return await prisma.photo.create({
        data: {
            title: data.title,
            url: data.url,
            comment: data.comment,
             userId: data.userId
        }
    })
}