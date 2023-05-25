import { db } from "../models/db.js";

export const locationController = {
  index: {
    handler: async function (request, h) {
      const location = await db.locationStore.getLocationById(request.params.id);
      const viewData = {
        title: "Placemark",
        location: location,
      };
      console.log(location);
      return h.view("location-view", viewData);
    },
  },

  addDetails: {
    handler: async function (request, h) {
      const location = await db.locationStore.getLocationById(request.params.id);
      const newDetails = {
        description: request.payload.description,
        latitude: Number(request.payload.latitude),
        longitude: Number(request.payload.longitude),
      };
      console.log(newDetails);
      await db.detailsStore.addDetails(location._id, newDetails);
      return h.redirect(`/location/${location._id}`);
    },
  },
};
