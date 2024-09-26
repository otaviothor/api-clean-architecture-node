import { Book } from "../domain/entities/Book";
import { IBookRepository } from "../domain/interfaces/IBookRepository";

export class GetAllBooks {
  constructor(private readonly bookRepository: IBookRepository) {}

  async execute(): Promise<Book[]> {
    return await this.bookRepository.findAll();
  }
}
