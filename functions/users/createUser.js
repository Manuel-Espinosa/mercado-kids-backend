import { User } from "../../schemas/user.js";
import {hashPassword} from '../security/hash.js'
import dotenv from "dotenv";

dotenv.config();

const createUser = async (req, res, next) => {
  try {
    // Take the values for each key from the request body
    const { father } = req.body;

    // Create a new User instance using the User schema
    const createdUser = new User({
      father: {
        name: father.name,
        age: father.age,
        rfc: father.rfc,
        phone: father.phone,
        email: father.email,
        address: {
          street: father.address.street,
          neighbourhood: father.address.neighbourhood,
          zip: father.address.zip
        },
        child: {
          name: father.child.name,
          birthdate: father.child.birthdate,
          phone: father.child.phone,
          avatar: father.child.avatar
        },
        password: await hashPassword(father.password),
        bankaccount: {
          numbercard: father.bankaccount.numbercard,
          expdate: father.bankaccount.expdate,
          ccv: father.bankaccount.ccv
        },
        status: father.status,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null
      }
    });

    // Wait until the save() operation finishes to insert the new user
    const result = await createdUser.save();
    res.json(result); // Return the created user
  } catch (error) {
    next(error);
  } finally {
    // Disconnect from MongoDB
    console.log("Created");
  }
};

export { createUser };
