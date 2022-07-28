const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const dashboardSchema = new Schema({
  Job_title: {
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
  Location: {
    type: String,
    required: "Please fill this field",
    trim: true,
  },
  Job_description: {
    type: String,
    required: "Please fill this field",
    trim: true,
  },
  Due_date: {
    type: String,
    required: "Please fill this field",
    trim: true,
  },
});

module.exports =
  mongoose.models.DashboardModel ||
  mongoose.model("DashboardModel", dashboardSchema);
