import express from "express";
import { BookController } from "../controllers/bookController";

export const bookRouter = express.Router();

bookRouter.post('/borrow', BookController.borrowBook);
bookRouter.post('/return/:borrowId', BookController.returnBook);
// router.get('/user/:userId/borrows', getUserBorrowRecords);
bookRouter.get('/books/search', BookController.searchBooks);