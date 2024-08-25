import express from "express";
import { loginUser, registerUser, userInfo } from "../controllers/userController.js";
import validateToken from "../middleware/validateToken.js";

const routerForUsers = express.Router();

// routerForUsers.post("/register", registerUser);

routerForUsers.route("/register").post(registerUser);

// routerForUsers.post("/login", loginUser);

routerForUsers.route("/login").post(loginUser);

routerForUsers.get("/info", validateToken, userInfo);

// routerForUsers.route("/info").get(validateToken, userInfo);
export default routerForUsers;