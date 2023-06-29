import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { IdSpec, PoiSpec, PoiSpecPlus, PoiArraySpec } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";
import { imageStore } from "../models/image-store.js";

export const poiApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const poi = await db.poiStore.getAllPois();
        return poi;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    response: { schema: PoiArraySpec, failAction: validationError },
    description: "Get all Points of Interest",
    notes: "Returns all Points of Interest",
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const poi = await db.poiStore.getPoiById(request.params.id);
        if (!poi) {
          return Boom.notFound("No Point of Interest with this id");
        }
        return poi;
      } catch (err) {
        console.error(err);
        return Boom.serverUnavailable("No Point of Interest with this id");
      }
    },
    tags: ["api"],
    description: "Find a Point of Interest",
    notes: "Returns a Point of Interest",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: PoiSpecPlus, failAction: validationError },
  },

  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const poi = await db.poiStore.addPoi(request.payload);
        if (poi) {
          return h.response(poi).code(201);
        }
        return Boom.badImplementation("error creating Point of Interest");
      } catch (err) {
        console.error(err);
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Create a Point of Interest",
    notes: "Returns the newly created Point of Interest",
    validate: { payload: PoiSpec, failAction: validationError },
    response: { schema: PoiSpecPlus, failAction: validationError },
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const poi = await db.poiStore.getPoiById(request.params.id);
        if (!poi) {
          return Boom.notFound("No Point if Interest with this id");
        }
        await db.poiStore.deletePoiById(poi._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No Point if Interest with this id");
      }
    },
    tags: ["api"],
    description: "Delete a Point of Interest",
    validate: { params: { id: IdSpec }, failAction: validationError },
  },


  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        await db.poiStore.deleteAllPois();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Delete all Points of Interest",
  },

  update: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const poi = await db.poiStore.editPoi(request.params.id, request.payload);
        if (poi) {
          return h.response(poi).code(201);
        }
        return Boom.badImplementation("error updating Point of Interest");
      } catch (err) {
        console.error(err);
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Update a Point of Interest",
    notes: "Returns the updated Point of Interest",
    validate: { payload: PoiSpecPlus, params: { id: IdSpec }, failAction: validationError },
    response: { schema: PoiSpecPlus, failAction: validationError },
  },

  findbyuser: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const pois = await db.poiStore.getUserPois(request.params.id);
        return pois;
      } catch (err) {
        console.log(err);
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: PoiArraySpec, failAction: validationError },
    description: "Get all Points of Interest by User id",
    notes: "Returns all Points of Interest by User id",
  },


  uploadImage: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const poi = await db.poiStore.getPoiById(request.params.id);

        if (Object.keys(request.payload).length > 0) {
          // eslint-disable-next-line no-restricted-syntax
          for (const key of Object.keys(request.payload)) {
            const uploadfile = Buffer.from(request.payload[key]);
 
            // eslint-disable-next-line no-await-in-loop
            const url = await imageStore.uploadImage(uploadfile);
            poi.img = url;
          }
          await db.poiStore.updatePoi(poi);
        }
        return h.response(poi).code(201);
      } catch (err) {
        console.log(err);
        return Boom.serverUnavailable("Database Error");
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
    },
    tags: ["api"],
    description: "Add image to Point of Interest",
  },

  deleteImage: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const poi = await db.poiStore.getPoiById(request.params.id);
        if (poi.img) {
          await imageStore.deleteImage(poi.img);
          poi.img = null;
          await db.poiStore.updatePoi(poi);
        }
        return h.response().code(204);
      } catch (err) {
        console.log(err);
        return Boom.serverUnavailable("No Image found");
      }
    },
    tags: ["api"],
    description: "Delete image from Point of Interest",
  },

  findbycategorycount: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const numberofpoiswithcategory = await db.poiStore.getNumberofPoiswithCategory();
        return numberofpoiswithcategory;
      } catch (err) {
        console.log(err);
        return Boom.serverUnavailable("Database Error");
      }
    },
    tags: ["api"],
    description: "Get all Categories and the number of Points of Interest in each",
    notes: "Returns number of Points of Interest in each category",
  },

};
