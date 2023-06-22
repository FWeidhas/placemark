import { userApi } from "./api/user-api.js";
import { poiApi } from "./api/poi-api.js";
import { detailsApi } from "./api/details-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "DELETE", path: "/api/users/{id}", config: userApi.deleteOne },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },
  { method: "GET", path: "/api/users/count", config: userApi.userCount },


  { method: "GET", path: "/api/pois", config: poiApi.find },
  { method: "POST", path: "/api/pois", config: poiApi.create },
  { method: "DELETE", path: "/api/pois", config: poiApi.deleteAll },
  { method: "GET", path: "/api/pois/{id}", config: poiApi.findOne },
  { method: "DELETE", path: "/api/pois/{id}", config: poiApi.deleteOne },
  { method: "PUT", path: "/api/pois/{id}", config: poiApi.update },


  { method: "GET", path: "/api/details", config: detailsApi.find },
  { method: "POST", path: "/api/pois/{id}/details", config: detailsApi.create },
  { method: "DELETE", path: "/api/details", config: detailsApi.deleteAll },
  { method: "GET", path: "/api/details/{id}", config: detailsApi.findOne },
  { method: "GET", path: "/api/pois/{id}/details", config: detailsApi.findOneByPoiId },
  { method: "DELETE", path: "/api/details/{id}", config: detailsApi.deleteOne },
  { method: "PUT", path: "/api/details/{id}", config: detailsApi.update },
];
