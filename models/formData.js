const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const formDataSchema = new Schema({
  Name: {
    type: String,
    required: "Please fill this field",
    trim: true,
  },
  Email: {
    type: String,
    required: "Please fill this field",
    trim: true,
  },
  Number: {
    type: Number,
    required: "Please fill this field",
    trim: true,
  },
  // Country: {
  //   type: String,
  //   trim: true,
  // },
});

module.exports =
  mongoose.models.FormDataModel ||
  mongoose.model("FormDataModel", formDataSchema);
