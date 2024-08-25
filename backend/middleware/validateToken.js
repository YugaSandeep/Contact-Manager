import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const validateToken = asyncHandler( async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")) {
        console.log("auth Header - ", authHeader);
        token = authHeader.split(" ")[1];
        console.log("token - ", token);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if(err) {
                res.status(401);
                throw new Error("User in not Authorized");
            }
            req.user = decoded.user;
            next();
        });

        if(!token) {
            res.status(404);
            throw new Error("User is not authorized or token in missing!");
        }
    }
    // res.json({"message": "user validated"});
});

export default validateToken;