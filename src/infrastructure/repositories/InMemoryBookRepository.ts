import { Book } from "../../domain/entities/Book";
import { IBookRepository } from "../../domain/interfaces/IBookRepository";

export class InMemoryBookRepository implements IBookRepository {
  private books: Book[] = [];

  async findAll(): Promise<Book[]> {
    return this.books;
  }

  async findById(id: string): Promise<Book | null> {
    return this.books.find((book) => book.id === id) || null;
  }

  async create(book: Book): Promise<Book> {
    this.books.push(book);
    return book;
  }

  async update(book: Book): Promise<void> {
    const index = this.books.findIndex((b) => b.id === book.id);
    if (index !== -1) {
      this.books[index] = book;
    }
  }

  async delete(id: string): Promise<void> {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
