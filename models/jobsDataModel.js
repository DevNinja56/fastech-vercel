const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const jobsDataSchema = new Schema({
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
  Phone_number: {
    type: Number,
    required: "Please fill this field",
    trim: true,
  },
  Subject: {
    type: String,
    required: "Please fill this field",
    trim: true,
  },
  Message: {
    type: String,
    required: "Please fill this field",
    trim: true,
  },
});

module.exports =
  mongoose.models.JobsDataModel ||
  mongoose.model("JobsDataModel", jobsDataSchema);
