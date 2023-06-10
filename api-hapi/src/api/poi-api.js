import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { IdSpec, PoiSpec, PoiSpecPlus, PoiArraySpec } from "../models/joi-schemas.js";
import { validationError } from "./logger.js";

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
    tags: ["api"],
    response: { schema: PoiArraySpec, failAction: validationError },
    description: "Get all Points of Interest",
    notes: "Returns all Points of Interest",
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
    tags: ["api"],
    description: "Find a Point of Interest",
    notes: "Returns a Point of Interest",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: PoiSpecPlus, failAction: validationError },
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
    tags: ["api"],
    description: "Create a Point of Interest",
    notes: "Returns the newly created Point of Interest",
    validate: { payload: PoiSpec, failAction: validationError },
    response: { schema: PoiSpecPlus, failAction: validationError },
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
    tags: ["api"],
    description: "Delete a Point of Interest",
    validate: { params: { id: IdSpec }, failAction: validationError },
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
    tags: ["api"],
    description: "Delete all Points of Interest",
  },
};
