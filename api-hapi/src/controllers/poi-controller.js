import * as cloudinary from "cloudinary";
import { db } from "../models/db.js";
import { DetailsSpec } from "../models/joi-schemas.js";
import { imageStore } from "../models/image-store.js";

export const poiController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const poi = await db.poiStore.getPoiById(request.params.id);
      const viewData = {
        title: "Placemark",
        user: loggedInUser,
        poi: poi,
        role: loggedInUser.isAdmin ? "Admin" : "User",
      };
      return h.view("poi-view", viewData);
    },
  },

  addDetails: {
    validate: {
      payload: DetailsSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const loggedInUser = request.auth.credentials;
        const poi = await db.poiStore.getPoiById(request.params.id);
        const viewData = {
          title: "Placemark",
          user: loggedInUser,
          poi: poi,
          role: loggedInUser.isAdmin ? "Admin" : "User",
          errors: error.details,
        };
        return h.view("poi-view", viewData).code(400).takeover();
      },
    },
    handler: async function (request, h) {
      const poi = await db.poiStore.getPoiById(request.params.id);
      const newDetails = {
        description: request.payload.description,
        latitude: Number(request.payload.latitude),
        longitude: Number(request.payload.longitude),
      };
      await db.detailsStore.addDetails(poi._id, newDetails);
      return h.redirect(`/poi/${poi._id}`);
    },
  },

  deleteDetails: {
    handler: async function (request, h) {
      await db.detailsStore.deleteDetailsById(request.params.detailsid);
      return h.redirect(`/poi/${request.params.id}`);
    },
  },

  uploadImage: {
    handler: async function (request, h) {
      try {
        const poi = await db.poiStore.getPoiById(request.params.id);
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          poi.img = url;
          await db.poiStore.updatePoi(poi);
        }
        return h.redirect(`/poi/${poi._id}`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/poi/${request.params.id}`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
    },
  },

  deleteImage: {
    handler: async function (request, h) {
      try {
        const poi = await db.poiStore.getPoiById(request.params.id);
        if (poi.img) {
          await imageStore.deleteImage(poi.img);
          poi.img = null;
          await db.poiStore.updatePoi(poi);
        }
        return h.redirect(`/poi/${poi._id}`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/poi/${request.params.id}`);
      }
    },
  },

  editDetails: {
    validate: {
      payload: DetailsSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const loggedInUser = request.auth.credentials;
        const poi = await db.poiStore.getPoiById(request.params.id);
        const viewData = {
          title: "Placemark",
          user: loggedInUser,
          poi: poi,
          role: loggedInUser.isAdmin ? "Admin" : "User",
          errors: error.details,
        };
        return h.view("poi-view", viewData).code(400).takeover();
      },
    },
    handler: async function (request, h) {
      const updates = {
        description: request.payload.description,
        latitude: Number(request.payload.latitude),
        longitude: Number(request.payload.longitude),
      };
      try {
        await db.detailsStore.updateDetails(request.params.id, updates);
        return h.redirect(`/poi/${poiId}`);
      } catch (error) {
        console.error(error);
        return h.redirect(`/poi/${poiId}`);
      }
    },
  },
};
