import express from "express";
import { createUser } from "../functions/users/createUser.js";
import { updateUser } from "../functions/users/updateUser.js";
import { loginUser } from "../functions/login/login.js";
import { getUser } from "../functions/users/getUser.js";

const userRouter = express.Router();

// POST /users - Create a new user
userRouter.post("/users", createUser);
userRouter.put("/users/:id", updateUser)
userRouter.post("/login", loginUser)
userRouter.get("/users/:id", getUser)



export default userRouter;
