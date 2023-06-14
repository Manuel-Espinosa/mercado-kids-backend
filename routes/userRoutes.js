import express from "express";
import { createUser } from "../functions/users/createUser.js";
import { updateUser } from "../functions/users/updateUser.js";

const userRouter = express.Router();

// POST /users - Create a new user
userRouter.post("/users", createUser);
userRouter.put("/users/:id", updateUser)

export default userRouter;
