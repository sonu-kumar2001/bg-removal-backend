const UserProfileModel = require("./Users.model");

module.exports = {
  signup: async (userObj) => {
    try {
      const user = new UserProfileModel({
        fullName: userObj.fullName,
        email: userObj.email,
        password: userObj.password,
        role: userObj.role,
      });
      const response = await user.save();
      return response;
    } catch (error) {
      return [];
    }
  },
  findUserByEmail: async (email) => {
    try {
      const response = await UserProfileModel.findOne({ email });
      return response;
    } catch (error) {
      return [];
    }
  },
};
