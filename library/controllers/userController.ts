import dotenv from "dotenv";
import { Request, Response } from "express";
// import { User } from "../models/user";

export class UserController {

    getUserBorrowRecords = async (req: Request, res: Response) => {
        const {userId, bookId} = req.body;
    }
}
