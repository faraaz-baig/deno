import { Application, Context } from "https://deno.land/x/abc@v1.2.6/mod.ts";
import { 
    getAllBooks,
    getBook
 } from "./controllers/booksController.ts"

const app = new Application();

//static files
app.static('/', './public');

// routes
app.get('/', async (ctx: Context) => {
   await ctx.file('./public/index.html');
});

app
    .get('/books', getAllBooks)
    .get('/books/:id', getBook)

// listen to port
app.start({ port: 3000 });

