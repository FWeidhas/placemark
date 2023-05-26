import { v4 } from "uuid";
import { detailsMemStore } from "./details-mem-store.js";

let pois = [];

export const poiMemStore = {
  async getAllPois() {
    return pois;
  },

  async addPoi(poi) {
    poi._id = v4();
    pois.push(poi);
    return poi;
  },

  async getPoiById(id) {
    const list = pois.find((poi) => poi._id === id);
    list.details = await detailsMemStore.getDetailsById(id);
    return list;
  },

  async deletePoiById(id) {
    const index = pois.findIndex((poi) => poi._id === id);
    pois.splice(index, 1);
  },

  async deleteAllpois() {
    pois = [];
  },

  async getUserpois(userid) {
    return pois.filter((poi) => poi.userid === userid);
  },
};
