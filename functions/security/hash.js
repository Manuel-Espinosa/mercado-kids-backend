import bcrypt from 'bcrypt';
import dotenv from "dotenv";

dotenv.config();

// Hashing password
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);

const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  return hashedPassword;
};

// Comparing password
const comparePassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    console.error('Error comparing passwords:', error);
    throw error;
  }
};

  
export { hashPassword, comparePassword };
