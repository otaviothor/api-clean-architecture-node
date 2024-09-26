import { IBook } from "../../infrastructure/models/BookModel";

export interface IBookRepository {
  findAll(): Promise<IBook[]>;
  findById(id: string): Promise<IBook | null>;
  create(book: IBook): Promise<IBook>;
  update(book: IBook): Promise<void>;
  delete(id: string): Promise<void>;
}
