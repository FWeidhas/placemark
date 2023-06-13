import { accountsController } from "./controllers/accounts-controller.js";
import { adminController } from "./controllers/admin-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { poiController } from "./controllers/poi-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  { method: "GET", path: "/dashboard", config: dashboardController.index },
  { method: "POST", path: "/dashboard/addpoi", config: dashboardController.addPoi },
  { method: "GET", path: "/dashboard/deletepoi/{id}", config: dashboardController.deletePoi },

  { method: "GET", path: "/poi/{id}", config: poiController.index },
  { method: "POST", path: "/poi/{id}/adddetails", config: poiController.addDetails },
  { method: "GET", path: "/poi/{id}/deletedetails/{detailsid}", config: poiController.deleteDetails },

  { method: "GET", path: "/admin", config: adminController.index },
  { method: "GET", path: "/admin/deleteuser/{id}", config: adminController.deleteUser },

  { method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } }
];
