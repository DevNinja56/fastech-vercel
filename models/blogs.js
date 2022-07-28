const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const blogsSchema = new Schema({
  image: {
    type: String,
    required: "Please fill this field",
    trim: true,
  },
  Category: {
    type: String,
    required: "Please fill this field",
    trim: true,
  },
  Title: {
    type: String,
    required: "Please fill this field",
    trim: true,
  },
});

module.exports =
  mongoose.models.BlogsModel || mongoose.model("BlogsModel", blogsSchema);
