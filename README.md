# Google Books Search

* This application requires at minimum 2 pages, check out the following mockup images for each page:

  * [x] [Search](Search.png) - User can search for books via the Google Books API
  
  * [ ] Render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the database.

  * [ ] [Saved](Saved.png) - Renders all books saved to the database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the database.

* [x] Start by using the 07-Ins_Mern example as a base for your application.

* [x] Add code to connect to a MongoDB or MySQL database named `googlebooks`.

* [x] Create a Book schema. You can use mongoose or Knex if you'd like.

* [x] At a minimum, books should have each of the following fields:
    * `title` - Title of the book from the Google Books API
    * `authors` - The books's author(s) as returned from the Google Books API
    * `description` - The book's description as returned from the Google Books API
    * `image` - The Book's thumbnail image as returned from the Google Books API
    * `link` - The Book's information link as returned from the Google Books API

* [x] Search Page Create a layout similar to the mockups. 
* [ ] Saved Page Create a layout similar to the mockups. 

* [x] [`react-router-dom`](https://github.com/reactjs/react-router) to navigate, hide and show your React components without changing the route within Express.

* The layout should include at least two React Components for each page `Search` and `Saved`.

* [ ] Add the following Express routes for your app:

    * `/api/books` (get) - Should return all saved books as JSON.

    * `/api/books` (post) - Will be used to save a new book to the database.

    * `/api/books/:id` (delete) - Will be used to delete a book from the database.

* (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.


* [x] Add To Your Portfolio

* [x] Hosting on Heroku




