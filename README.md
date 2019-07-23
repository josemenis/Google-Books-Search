# Google-Books-Search

* This application requires at minimum 2 pages, check out the following mockup images for each page:

  * [x] [Search](Search.png) - User can search for books via the [Google Books API](https://developers.google.com/books/docs/v1/using#PerformingSearch)
  
  * [ ] Render Result. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the database.

  * [ ] [Saved](Saved.png) - Renders all books saved to the database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the database.

### [x] Start by using the **07-Ins_Mern** example as a base for your application.

### [x] Add code to connect to a MongoDB or MySQL database named `googlebooks`.

### [x] Create a Book schema. You can use mongoose or Knex if you'd like. 
Following fields:
* `title` 
* `authors` 
* `description` 
* `image` 
* `link` 

### [x] Create a layout similar to the mockups displayed above. This should be a SPA (Single Page Application) that uses [`react-router-dom`](https://github.com/reactjs/react-router) to navigate, hide and show your React components without changing the route within Express.

* [x] The layout should include at least two React Components for each page `Search` and `Saved`.

### [ ] Add the following Express routes for your app:

* `/api/books` (get) - Should return all saved books as JSON.

* `/api/books` (post) - Will be used to save a new book to the database.

* `/api/books/:id` (delete) - Will be used to delete a book from the database.

* `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.

### [ ] Deploy your application to Heroku once complete. **You must use Create React App** and current versions of React and React-Router-Dom for this assignment.

