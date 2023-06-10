import Boom from "@hapi/boom";
import { db } from "../models/db.js";
import { validationError } from "./logger.js";
import { IdSpec, DetailsSpec, DetailsSpecPlus, DetailsArraySpec } from "../models/joi-schemas.js";

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
    tags: ["api"],
    response: { schema: DetailsArraySpec, failAction: validationError },
    description: "Get all Details",
    notes: "Returns all Details",
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
    tags: ["api"],
    description: "Find details based on given ID",
    notes: "Returns details",
    validate: { params: { id: IdSpec }, failAction: validationError },
    response: { schema: DetailsSpecPlus, failAction: validationError },
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
    tags: ["api"],
    description: "Create details",
    notes: "Returns the newly created details",
    validate: { payload: DetailsSpec },
    response: { schema: DetailsSpecPlus, failAction: validationError },
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
    tags: ["api"],
    description: "Delete details based on given ID",
    validate: { params: { id: IdSpec }, failAction: validationError },
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
    tags: ["api"],
    description: "Delete all details",
  },
};
