const userModel = require("../models/users/dml");

const userService = {
  async signup(userObj) {
    const response = await userModel.signup(userObj);
    return response;
  },
  async findUserByEmail(email) {
    const response = await userModel.findUserByEmail(email);
    return response;
  },
};

module.exports = userService;