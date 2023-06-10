import axios from "axios";

import { serviceUrl } from "../fixtures.js";

export const placemarkService = {
  placemarkUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.placemarkUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    const res = await axios.get(`${this.placemarkUrl}/api/users`);
    return res.data;
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.placemarkUrl}/api/users`);
    return res.data;
  },

  async deleteOne(id) {
    const res = await axios.delete(`${this.placemarkUrl}/api/users/${id}`);
    return res.data;
  },

  async createPoi(poi) {
    const res = await axios.post(`${this.placemarkUrl}/api/pois`, poi);
    return res.data;
  },

  async deleteAllPois() {
    const response = await axios.delete(`${this.placemarkUrl}/api/pois`);
    return response.data;
  },

  async deleteOnePoi(id) {
    const response = await axios.delete(`${this.placemarkUrl}/api/pois/${id}`);
    return response;
  },

  async getAllPois() {
    const res = await axios.get(`${this.placemarkUrl}/api/pois`);
    return res.data;
  },

  async getPoiById(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/pois/${id}`);
    return res.data;
  },
  
}
