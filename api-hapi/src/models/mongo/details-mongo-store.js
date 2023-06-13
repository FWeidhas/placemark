import { Details } from "./details.js";

export const detailsMongoStore = {

  async getAllDetails() {
    const details = await Details.find({}).lean();
    return details;
  },

  async getDetailsByPoiId(id) {
    if(id){
      const details = await Details.findOne({ poiid: id }).lean();
      return details;
    }
    return null;
  },

  async getDetailsById(id) {
    if(id){
      const details = await Details.findOne({ _id: id }).lean();
    return details;
    }
    return null;
  },

  async addDetails(id, details) {
      const newDetails = new Details(details);
      newDetails.poiid = id;
      const detailsObj = await newDetails.save();
      return this.getDetailsByPoiId(detailsObj.poiid);
  },

  async deleteDetailsById(id) {
    try {
      await Details.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllDetails(){
    await Details.deleteMany({});
  }

};
