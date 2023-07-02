import mongoose from "mongoose";

const { Schema } = mongoose;

const poiSchema = new Schema(
  {
    name: String,
    category: String,
    img: [String],
    userid: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Poi = mongoose.model("Poi", poiSchema);

