import { db } from "../models/db.js";
import { DetailsSpec } from "../models/joi-schemas.js";

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
  }
};
