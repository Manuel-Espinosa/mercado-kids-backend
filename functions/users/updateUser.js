import { User } from "../../schemas/user.js";

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    // Construct the dynamic update object
    const updateObject = {};
    for (const key in updatedData) {
      updateObject[`father.${key}`] = updatedData[key];
    }

    // Update the user using the User model
    let updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { $set: updateObject },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    next(error);
  } finally {
    console.log("Updated");
  }
};

export { updateUser };
