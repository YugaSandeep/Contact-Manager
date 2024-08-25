1. Created backend folder. And initialized npm using `npm init`.
2. Then created .gitignore and added `/node-Modules` and `.env`.
3. Created `index.js` and installed **Express** framework. And also installed `nodemon`.
4. And created a basic express server using `listen`.
5. Created `.env` file, and added port number to it. And installed dotenv.
6. Created `/api/contacts` API to get all contacts.
7. Created routes folder and contactRoutes.js in it, and created router end exported it.
8. Used `use` middleware for handeling `/api/contacts`.
9. handled multiple requests in `contactRoutes.js`.
10. Created a new Folder `controller` and created `contactController.js` in it. And handled the requests which are in `contactRoutes.js` and simplified the `contactRoutes.js`.
11. Recieved data sent from the client for creating the contact by using a bodyparser.
12. Handled null data by creating `errorHandler.js` in `middleware` folder.
13. Created a database **ContactsDB** in mongodb atlas, and created `contacts` collection in it.
14. Created a folder `config` and created `dbConnection.js`.
15. Installed `mongoose` using `npm i mongoose`, and added CONNECTION_STRING (URI) to the .env.
16. Connected to mongodb database with dbConnection.js.
17. Created `models` folder to create `contactSchema` schema. And exported this schema.
18. Updated `contactController.js` to perform CRUD operations (get, getById, create, updateById, deleteById).
19. Created `validToken.js` in middleware for validation purpose, used **JWT** in it.
20. Added `ACCESS_TOKEN_SECRET` in .env, used `jwt.verify()` for verification purpose.
21. Used **next()** middleware. And updated `contactModel.js` (added user_id field) to make contatcts user specific.
22. And updated CRUD operations in `contactController.js` such that only user can operate his contacts. (used user_id for that).