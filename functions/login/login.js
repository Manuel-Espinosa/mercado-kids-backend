import { v4 as uuidv4 } from "uuid";
import { User } from "../../schemas/user.js";
import { comparePassword } from "../security/hash.js";
//import redis from "redis";
/*
const redisOptions = {
  host: "127.29.176.236",
  port: 6379,
};

const client = redis.createClient(redisOptions);

client.on("error", (error) => {
  console.error("Redis error:", error);
});

await client.connect();
*/
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find the user with the provided email
    const user = await User.findOne({ "father.email": email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Compare the provided password with the stored password hash
    const isPasswordValid = await comparePassword(
      password,
      user.father.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password",auth:false });
    }

    // Generate a session ID
    const sessionID = uuidv4();

    // Store the session ID in Redis cache
   /* client.set(sessionID, user._id.toString(), "EX", 3600, (error) => {
      if (error) {
        console.error("Error storing session ID in Redis:", error);
      }
    });*/

    // Set the session ID as a cookie in the response header
    res.cookie("sessionID", sessionID, { httpOnly: true });
    

    // Password is valid, proceed with authentication
    // You can generate and return a JWT token here if you're using token-based authentication

    res.json({ message: "Login successful",auth:true, user: user._id });
  } catch (error) {
    next(error);
  }
};

export { loginUser };
