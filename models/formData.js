const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const formDataSchema = new Schema({
  Title: {
    type: String,
    required: "Please fill this field",
    trim: true,
  },
  Positions: {
    type: String,
    required: "Please fill this field",
    trim: true,
  },
  Department: {
    type: String,
    required: "Please fill this field",
    trim: true,
  },
});

module.exports =
  mongoose.models.FormDataModel ||
  mongoose.model("FormDataModel", formDataSchema);
