import { db } from "../models/db.js";

export const adminController = {
    index: {
      handler: async function (request, h) {
        const loggedInUser = request.auth.credentials;
        if(loggedInUser.isAdmin) {
            const users = await db.userStore.getAllUsers();
            const viewData = {
                title: "Placemark Adminboard",
                user: loggedInUser,
                role: loggedInUser.isAdmin ? "Admin" : "User",
                users: users,
              };
              return h.view("admin-view", viewData);
        }
        return h.redirect("/");
      },
    },
  
    deleteUser: {
      handler: async function (request, h) {
        const poi = await db.userStore.getUserById(request.params.id);
        await db.userStore.deleteUserById(poi._id);
        return h.redirect("/admin");
      },
    },
  };