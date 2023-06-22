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
        role: loggedInUser.isAdmin ? "Admin" : "User",
        pois: pois,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addPoi: {
    validate: {
      payload: PoiSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const loggedInUser = request.auth.credentials;
        const pois = await db.poiStore.getUserPois(loggedInUser._id);
        const viewData = {
          title: "Add Point of Interest error",
          user: loggedInUser,
          role: loggedInUser.isAdmin ? "Admin" : "User",
          pois: pois,
          errors: error.details,
        };
        return h.view("dashboard-view", viewData).code(400).takeover();
      }, 
    },
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const newPoi = {
        userid: loggedInUser._id,
        name: request.payload.name,
        category: request.payload.category ,
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

  editPoi: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const poi = await db.poiStore.getPoiById(request.params.id);
      const viewData = {
        title: "Edit Point of Interest error",
        user: loggedInUser,
        role: loggedInUser.isAdmin ? "Admin" : "User",
        poi: poi,
      };
      return h.view("dashboard-edit-view", viewData);
    },
  },

  updatePoi: {
    validate: {
      payload: PoiSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const loggedInUser = request.auth.credentials;
        const poi = await db.poiStore.getPoiById(request.params.id);
        const viewData = {
          title: "Edit Point of Interest error",
          user: loggedInUser,
          role: loggedInUser.isAdmin ? "Admin" : "User",
          poi: poi,
          errors: error.details,
        };
        return h.view("dashboard-edit-view", viewData).code(400).takeover();
      }, 
    },
    handler: async function (request, h) {

      const updates = {
        name: request.payload.name,
        category: request.payload.category,
      };

      try {

        await db.poiStore.editPoi(request.params.id, updates);
        return h.redirect("/dashboard");

      } catch (error) {
        console.error(error);
  
        return h.redirect("/dashboard");
      }
    },
  },
};
