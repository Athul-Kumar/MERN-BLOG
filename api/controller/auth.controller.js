import User from "../models/user.model.js";
import bycryptjs from "bcryptjs";
export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields needed to be filled" });
  }

//   encrypting userPasswords
  const hashedPassword = bycryptjs.hashSync(password, 10);

  //   create new users
  const newUser = new User({ username, email, password:hashedPassword });
  try {
    await newUser.save();
    res.json("signup successful!");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
