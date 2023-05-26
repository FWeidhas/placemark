import { Details } from "./details.js";

export const detailsMongoStore = {
  async getDetailsByPoiId(id) {
    const details = await Details.findOne({ poiid: id }).lean();
    return details;
  },

  async addDetails(id, details) {
      details.poiid = id;
      const newDetails = new Details(details);
      const detailsObj = await newDetails.save();
      return this.getDetailsByPoiId(detailsObj._id);
  },

  async deleteDetails(id) {
    try {
      await Details.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

};
