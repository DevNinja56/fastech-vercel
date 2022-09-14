const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const subscriptionSchema = new Schema({
  Email: {
    type: String,
    required: "Please fill this field",
    trim: true,
  },
});

module.exports =
  mongoose.models.SubscriptionModel ||
  mongoose.model("SubscriptionModel", subscriptionSchema);
