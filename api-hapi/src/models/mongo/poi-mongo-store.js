import { Poi } from "./poi.js";
import { detailsMongoStore } from "./details-mongo-store.js";

export const poiMongoStore = {
  async getAllPois() {
    const pois = await Poi.find().lean();
    return pois;
  },

  async getPoiById(id) {
    if (id) {
      const poi = await Poi.findOne({ _id: id }).lean();
      if (poi) {
        poi.details = await detailsMongoStore.getDetailsByPoiId(poi._id);
      }
      return poi;
    }
    return null;
  },

  async addPoi(poi) {
    const newPoi = new Poi(poi);
    const poiObj = await newPoi.save();
    return this.getPoiById(poiObj._id);
  },

  async getUserPois(id) {
    const poi = await Poi.find({ userid: id }).lean();
    return poi;
  },

  async deletePoiById(id) {
    try {
      await Poi.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deletePoiByUserId(id) {
    try {
      await Poi.deleteMany({ userid: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllPois() {
    await Poi.deleteMany({});
  },

  async updatePoi(updatedPoi) {
    const poi = await Poi.findOne({ _id: updatedPoi._id });
    poi.img = updatedPoi.img;
    await poi.save();
  },   

  async getNumberofPois() {
    const numberofpois = await Poi.countDocuments({});

    return numberofpois;
  },

  async getNumberofPoiswithCategory() {
    const categories = ["River", "Pond", "Lake", "Sea"];
    const numberofpois = [];
  
    await Promise.all(
      categories.map(async (category) => {
        const count = await Poi.countDocuments({ category: category });
        const categorywithcount = {
          category: category,
          count: count
        };
        numberofpois.push(categorywithcount);
      })
    );
  
    return numberofpois;
  },

  async getUserPoisCount(id) {
    const count = await Poi.countDocuments({ userid: id });

    return count;
  },

  async editPoi(id, updates) {
    try {
      const poi = await Poi.updateOne({ _id: id }, { $set: updates });
      return poi;
    } catch (error) {
      throw new Error(`Failed to update the poi: ${error}`);
    }
  }
  
};
