import { Request, Response } from "express";
import { DIContainer } from "../../infrastructure/DIContainer";
import { CreateBookDto } from "../dto/CreateBookDto";
import { validate } from "class-validator";

export class BookController {
  private getAllBooks = DIContainer.getGetAllBooksUseCase();

  async getAll(req: Request, res: Response) {
    const books = await this.getAllBooks.execute();
    res.json(books);
  }

  async create(req: Request, res: Response) {
    const dto = Object.assign(new CreateBookDto(), req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // TODO implements create
  }

  // TODO implements findById
  // TODO implements update
  // TODO implements delete
}
