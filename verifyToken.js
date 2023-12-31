import jwt from "jsonwebtoken";
import createError from "./error"; // Assuming "error.js" is in the same directory

export const VerifyToken = (req, res, next) => {
   const token = req.cookies.access_token;
   if (!token) return next(createError(401, "You are not authenticated!"));

   jwt.verify(token, process.env.JWT, (err, user) => {
      if (err) return next(createError(403, "Token is not valid"));
      req.user = user;
      next();
   });
};