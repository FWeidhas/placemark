import { db } from "../models/db.js";
import { poiMemStore } from "../models/mem/poi-mem-store.js";

export const adminController = {
    index: {
      handler: async function (request, h) {
        const loggedInUser = request.auth.credentials;
        if (loggedInUser.isAdmin) {
          const users = await db.userStore.getAllUsers();
          const userCountPromises = users.map(user => db.poiStore.getUserPoisCount(user._id));
    
          const poisCounts = await Promise.all(userCountPromises);
    
          users.forEach((user, index) => {
            user.poisCount = poisCounts[index];
          });
    
          const numberofpois = await db.poiStore.getNumberofPois();
          const numberofpoiswithcategory = await db.poiStore.getNumberofPoiswithCategory();
          const usercount = await db.userStore.getUserCount();
    
          const viewData = {
            title: "Placemark Adminboard",
            user: loggedInUser,
            role: loggedInUser.isAdmin ? "Admin" : "User",
            users: users,
            numberofpois: numberofpois,
            numberofpoiswithcategory: numberofpoiswithcategory,
            usercount: usercount,
          };
          return h.view("admin-view", viewData);
        }
        return h.redirect("/");
      },
    },
  
    deleteUser: {
      handler: async function (request, h) {
        const userId = request.params.id;
        const user = await db.userStore.getUserById(userId);
        const pois = await db.poiStore.getUserPois(user._id);
    
        await db.userStore.deleteUserById(user._id);
        await db.poiStore.deletePoiByUserId(user._id);
    
        await Promise.all(
          pois.map(async (poi) => {
            await db.detailsStore.deleteDetailsByPoiId(poi._id);
          })
        );
    
        return h.redirect("/admin");
      },
    },        
  };