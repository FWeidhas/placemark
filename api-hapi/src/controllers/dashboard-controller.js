import { db } from "../models/db.js";
import { PoiSpec } from "../models/joi-schemas.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const pois = await db.poiStore.getUserPois(loggedInUser._id);
      const viewData = {
        title: "Placemark Dashboard",
        user: loggedInUser,
        pois: pois,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addPoi: {
    validate: {
      payload: PoiSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("dashboard-view", { title: "Add Point of Interest error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const newPoi = {
        userid: loggedInUser._id,
        name: request.payload.name,
      };
      await db.poiStore.addPoi(newPoi);
      return h.redirect("/dashboard");
    },
  },

  deletePoi: {
    handler: async function (request, h) {
      const poi = await db.poiStore.getPoiById(request.params.id);
      await db.poiStore.deletePoiById(poi._id);
      return h.redirect("/dashboard");
    },
  },
};
