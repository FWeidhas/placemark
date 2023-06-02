import Mongoose from "mongoose";

const { Schema } = Mongoose;

const detailsSchema = new Schema({
  description: String,
  latitude: Number,
  longitude: Number,
  category: String,
  poiid: {
    type: Schema.Types.ObjectId,
    ref: "Poi",
  },
});

export const Details = Mongoose.model("Details", detailsSchema);
