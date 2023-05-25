import { db } from "../models/db.js";
import { DetailsSpec } from "../models/joi-schemas.js";

export const locationController = {
  index: {
    handler: async function (request, h) {
      const location = await db.locationStore.getLocationById(request.params.id);
      const viewData = {
        title: "Placemark",
        location: location,
      };
      return h.view("location-view", viewData);
    },
  },

  addDetails: {
    validate: {
      payload: DetailsSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("location-view", { title: "Add Details error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const location = await db.locationStore.getLocationById(request.params.id);
      const newDetails = {
        description: request.payload.description,
        latitude: Number(request.payload.latitude),
        longitude: Number(request.payload.longitude),
      };
      await db.detailsStore.addDetails(location._id, newDetails);
      return h.redirect(`/location/${location._id}`);
    },
  },
};
