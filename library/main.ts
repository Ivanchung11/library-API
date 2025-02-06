import express from "express";
import { Request, Response } from "express";
import { Client } from "pg";
import dotenv from "dotenv";
import expressSession from "express-session";
import { bookRouter } from "./routers/bookRouter";
import { userRouter } from "./routers/usersRouter";

dotenv.config();

const pgClient = new Client({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  });
  
  pgClient.connect();
  
  const app = express();

  app.use(expressSession({
    secret: "adfjkbjkabfjkabjkfdbjaks",
    resave: true,
    saveUninitialized: true,
  }))  

  app.use(bookRouter);
  app.use(userRouter);   
  

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/`);
});
