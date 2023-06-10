import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const detailsApi = {
  find: {
    auth: false,
    handler: async function (request, h) {
      try {
        const details = await db.detailsStore.getAllDetails();
        return details;
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  findOne: {
    auth: false,
    handler: async function (request, h) {
      try {
        const details = await db.detailsStore.getDetailsById(request.params.id);
        if (!details) {
          return Boom.notFound("No Details with this id");
        }
        return details;
      } catch (err) {
        return Boom.serverUnavailable("No Details with this id");
      }
    },
  },

  findOneByPoiId: {
    auth: false,
    handler: async function (request, h) {
      try {
        const details = await db.detailsStore.getDetailsByPoiId(request.params.id);
        if (!details) {
          return Boom.notFound("No Details with this id");
        }
        return details;
      } catch (err) {
        return Boom.serverUnavailable("No Details with this id");
      }
    },
  },

  create: {
    auth: false,
    handler: async function (request, h) {
      try {
        const details = await db.detailsStore.addDetails(request.params.id, request.payload);
        if (details) {
          return h.response(details).code(201);
        }
        return Boom.badImplementation("error creating details");
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  deleteOne: {
    auth: false,
    handler: async function (request, h) {
      try {
        const details = await db.detailsStore.getDetailsById(request.params.id);
        if (!details) {
          return Boom.notFound("No Details with this id");
        }
        await db.detailsStore.deleteDetailsById(details._id);
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("No Details with this id");
      }
    },
  },


  deleteAll: {
    auth: false,
    handler: async function (request, h) {
      try {
        await db.detailsStore.deleteAllDetails();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },
};
