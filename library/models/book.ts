import { pgClient } from "../database";

export class Book {
    async borrowBook(userId: number, bookId: number) {
        let result =await pgClient.query('INSERT INTO borrows (user_id, book_id) VALUES ($1, $2)', [userId, bookId]);
        return result;
    }
}