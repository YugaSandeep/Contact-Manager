import express from "express";
import dotenv from "dotenv";
import router from "./routes/contactRoutes.js";
import routerForUsers from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import connectDb from "./cofig/dbConnetion.js";
import cors from "cors";

connectDb();
dotenv.config();

const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors());
//always use this middle right after initializing the express();


app.use("/api/contacts", router);
app.use("/api/users", routerForUsers);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});