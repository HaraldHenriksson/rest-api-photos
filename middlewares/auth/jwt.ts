/**
 * JWT Authentification Middleware
 */

import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import Debug from 'debug'
import { JwtPayload } from '../../src/types' 

/**
 *  Validate token
 */
export const validateToken = (req: Request, res: Response, next: NextFunction) => {

	if (!req.headers.authorization) {

		return res.status(401).send({
			status: "fail",
			data: "Authorization required",
		})
	}

	const [authSchema, token] = req.headers.authorization.split(" ")

	if (authSchema.toLocaleLowerCase() !== "bearer") {

		return res.status(401).send({
			status: "fail",
			data: "Authorization required",
		})
	}

	if (!process.env.ACCESS_TOKEN_SECRET) {
		return res.status(500).send({
			status: "error",
			message: "No access token secret defined",
		})
	}
	try {
		const payload = (jwt.verify(token, process.env.ACCESS_TOKEN_SECRET) as unknown) as JwtPayload

		req.token = payload

	} catch (err) {

		return res.status(401).send({
			status: "fail",
			data: "Authorization required",
		})
	}

	next()
}
