import { Details } from "./details.js";

export const detailsMongoStore = {
  async getDetailsByPoiId(id) {
    const details = await Details.find({ poiid: id }).lean();
    return details;
  },
};
