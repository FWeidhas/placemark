import { db } from "../models/db.js";
import { DetailsSpec } from "../models/joi-schemas.js";

export const poiController = {
  index: {
    handler: async function (request, h) {
      const poi = await db.poiStore.getPoiById(request.params.id);
      const viewData = {
        title: "Placemark",
        poi: poi,
      };
      return h.view("poi-view", viewData);
    },
  },

  addDetails: {
    validate: {
      payload: DetailsSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("poi-view", { title: "Add Details error", errors: error.details }).takeover().code(400);
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
      await db.detailsStore.deleteDetails(request.params.detailsid);
      return h.redirect(`/poi/${request.params.id}`);
    },
  }
};
