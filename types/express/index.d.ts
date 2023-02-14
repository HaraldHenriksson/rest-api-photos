import { User } from "@prisma/client";
import { JwtPayload } from "../../src/types";


declare global {
	namespace Express {
		export interface Request {
			token?: JwtPayload,
			user?: User,
		}
	}
}
