
import {Request, Response} from "express";
// import { pgClient } from "../database";
import { Book } from "../models/book";

export class BookController {
    constructor(private Book: Book) {}

    borrowBook = async (req: Request, res: Response) => {
        const result = await this.Book.borrowBook(userId, bookId);
        const raw = result.rows;
    
        res.json({ msg: "borrowed", raw });

    
}
    returnBook = async (req: Request, res: Response) => {
        const {userId, bookId} = req.body;
    }

    searchBooks = async (req: Request, res: Response) => {
        const {userId, bookId} = req.body;
    }
}