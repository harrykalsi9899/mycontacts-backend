const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add the contact name"],
    },
    phone: {
      type: String,
      required: [true, "please add the contact phone"],
    },
    email: {
      type: String,
      required: [true, "please add the contact email address"],
    },
  },
  {
    timestampes: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
