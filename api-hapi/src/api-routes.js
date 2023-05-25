import { userApi } from "./api/user-api.js";
import { locationApi } from "./api/location-api.js";
import { detailsApi } from "./api/details-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },

  { method: "GET", path: "/api/locations", config: locationApi.find },
  { method: "POST", path: "/api/locations", config: locationApi.create },
  { method: "DELETE", path: "/api/locations", config: locationApi.deleteAll },
  { method: "GET", path: "/api/locations/{id}", config: locationApi.findOne },

  { method: "GET", path: "/api/details", config: detailsApi.find },
  { method: "POST", path: "/api/details", config: detailsApi.create },
  { method: "DELETE", path: "/api/details", config: detailsApi.deleteDetails },
  { method: "GET", path: "/api/details/{id}", config: detailsApi.findOne },
];
