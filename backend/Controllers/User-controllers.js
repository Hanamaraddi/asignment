import User from "../Models/User.js";

export const user = async (req, res) => {
  try {
    const { name } = req.body;

    const userName = await User.findOne({ name });

    if (userName) {
      res.status(404).json("User already Exits");
    }

    const newUser = new User({
      name: req.body.name,
    });

    await newUser.save();
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
  }
};

export default user;
