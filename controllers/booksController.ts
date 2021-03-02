import { Context } from "https://deno.land/x/abc@v1.2.6/mod.ts";
import { Book } from "../models/bookModels.ts";
import { v4 } from "https://deno.land/std@0.88.0/uuid/mod.ts";

const books: Book[] = [
    { id: '1', title: 'name of the wind', author: 'patrick rothfuss', pages: 500 },
    { id: '2', title: 'the way of the kings', author: 'brondon sanderson', pages: 400 },
    { id: '3', title: 'good omens', author: 'terry pratchet', pages: 300 }
];

export const getAllBooks = (ctx: Context) => {
    return ctx.json(books, 200)
}

export const getBook = (ctx: Context) => {
    const { id } = ctx.params
    const book = books.find((b: Book) => b.id === id)
    if (book) {
        return ctx.json(book, 200)
    } else {
        return ctx.string(`No book with this ID ${ id } Was Found`, 404)
    }
}

