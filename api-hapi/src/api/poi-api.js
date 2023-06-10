import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const poiApi = {
  find: {
    auth: false,
    handler: async function (request, h) {
      try {
        const poi = await db.poiStore.getAllPois();
        return poi;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  findOne: {
    auth: false,
    handler: async function (request, h) {
      try {
        const poi = await db.poiStore.getPoiById(request.params.id);
        if (!poi) {
          return Boom.notFound("No Point of Interest with this id");
        }
        return poi;
      } catch (err) {
        return Boom.serverUnavailable("No Point of Interest with this id");
      }
    },
  },

  create: {
    auth: false,
    handler: async function (request, h) {
      try {
        const poi = await db.poiStore.addPoi(request.payload);
        if (poi) {
          return h.response(poi).code(201);
        }
        return Boom.badImplementation("error creating Point of Interest");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  deleteOne: {
    auth: false,
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
  },


  deleteAll: {
    auth: false,
    handler: async function (request, h) {
      try {
        await db.poiStore.deleteAllPois();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },
};
