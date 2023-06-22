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

  async getAllDetails() {
    const res = await axios.get(`${this.placemarkUrl}/api/details`);
    return res.data;
  },

  async createDetails(id, details) {
    const res = await axios.post(`${this.placemarkUrl}/api/pois/${id}/details`, details);
    return res.data;
  },

  async deleteAllDetails() {
    const res = await axios.delete(`${this.placemarkUrl}/api/details`);
    return res.data;
  },

  async getDetailsById(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/details/${id}`);
    return res.data;
  },

  async getDetailsByPoiId(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/pois/${id}/details`);
    return res.data;
  },

  async deleteDetailsbyId(id) {
    const res = await axios.delete(`${this.placemarkUrl}/api/details/${id}`);
    return res.data;
  },

  async authenticate(user) {
    const response = await axios.post(`${this.placemarkUrl}/api/users/authenticate`, user);
    // eslint-disable-next-line dot-notation, prefer-template
    axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
    return response.data;
  },

  async clearAuth() {
    // eslint-disable-next-line dot-notation
    axios.defaults.headers.common["Authorization"] = "";
  }

};
