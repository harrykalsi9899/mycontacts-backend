const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please add the userName"],
    },
    email: {
      type: String,
      required: [true, "please enter the email"],
    },
    password: {
      type: String,
      required: [true, "please add the user password"],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
