const { compare } = require("bcrypt");
const userService = require("../service/user.service");
const authentication = require("../routes/v1/authentication/authenticate");
const helper = require("../utils/helper");

const userController = {
  signup: async (req, res) => {
    try {
      const { fullName, email, password, role } = req.body;
      if (!fullName || !email || !password || !role) {
        return res.status(400).json({
          error: "Please fill all the fields",
        });
      }
      const userDetail = await userService.findUserByEmail(email);
      if (userDetail) {
        return res.status(400).json({
          error: "User already exists",
        });
      }
      const user = await userService.signup({
        fullName,
        email,
        password,
        role,
      });
      const createdToken = await authentication.generateJwt(user);
      res.status(201).json({
        user: {
          ...helper.userInfo(user),
          createdToken,
        },
        message: "User created Successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Something went wrong",
      });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({
          error: "Please fill all the fields",
        });
      }
      const user = await userService.findUserByEmail(email);
      if (!user) {
        return res.status(400).json({
          error: "User doesn't exists",
        });
      }
      const result = await compare(password, user.password);
      if (user && result) {
        const token = await authentication.generateJwt(user);
        return res.status(200).json({
          userInfo: { ...helper.userInfo(user), token },
          message: "User logged in successfully",
        });
      }
      return res.status(403).json({ err: "credential is incorrect" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Something went wrong",
      });
    }
  },
};

module.exports = userController;
