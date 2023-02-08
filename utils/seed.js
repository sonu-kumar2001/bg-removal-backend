const User = require("../models/users/Users.model");

User.findOne({ email: process.env.EMAIL }, (err, admin) => {
  if (err) throw new Error("something went wrong during seeding");
  if (!admin) {
    User.create({
      email: process.env.EMAIL,
      fullName: process.env.USERNAME,
      password: process.env.PASSWORD,
      role: process.env.ROLE,
    });
  }
});
