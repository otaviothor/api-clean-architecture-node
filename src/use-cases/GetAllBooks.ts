import { IBookRepository } from "../domain/interfaces/IBookRepository";
import { IBook } from "../infrastructure/models/BookModel";

export class GetAllBooks {
  constructor(private readonly bookRepository: IBookRepository) {}

  async execute(): Promise<IBook[]> {
    return await this.bookRepository.findAll();
  }
}
