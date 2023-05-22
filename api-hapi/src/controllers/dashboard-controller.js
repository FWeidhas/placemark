import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const locations = await db.locationStore.getAllLocations();
      const viewData = {
        title: "Placemark Dashboard",
        locations: locations,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addLocation: {
    handler: async function (request, h) {
      const newLocation = {
        name: request.payload.name,
      };
      await db.locationStore.addLocation(newLocation);
      return h.redirect("/dashboard");
    },
  },
};
