import { User } from "../../schemas/user.js";

const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    delete user.father.password;

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export { getUser };
