import { IBookRepository } from "../../domain/interfaces/IBookRepository";
import { BookModel, IBook } from "../models/BookModel";

export class MongoBookRepository implements IBookRepository {
  async findAll(): Promise<IBook[]> {
    return await BookModel.find();
  }

  async findById(id: string): Promise<IBook | null> {
    return await BookModel.findById(id);
  }

  async create(book: IBook): Promise<IBook> {
    const newBook = new BookModel(book);
    await newBook.save();
    return newBook;
  }

  async update(book: IBook): Promise<void> {
    await BookModel.findByIdAndUpdate(book.id, book);
  }

  async delete(id: string): Promise<void> {
    await BookModel.findByIdAndDelete(id);
  }
}
