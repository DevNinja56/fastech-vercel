const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const chatBotSchema = new Schema({
  Message: {
    type: String,
    required: "Please fill this field",
    trim: true,
  },
  Name: {
    type: String,
    required: "Please fill this field",
    trim: true,
  },
  Phone_number: {
    type: Number,
    required: "Please fill this field",
    trim: true,
  },
  Email: {
    type: String,
    required: "Please fill this field",
    trim: true,
  },
});

module.exports =
  mongoose.models.ChatBotModel || mongoose.model("ChatBotModel", chatBotSchema);
