import { userMemStore } from "./mem/user-mem-store.js";
import { poiMemStore } from "./mem/poi-mem-store.js";
import { detailsMemStore } from "./mem/details-mem-store.js";
import { connectMongo } from "./mongo/connect.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";

export const db = {
  userStore: null,
  poiStore: null,
  detailsStore: null,

  init(storeType) {
    switch (storeType) {
      case "mongo":
        this.userStore = userMongoStore;
        connectMongo();
        break;
      default:
        this.userStore = userMemStore;
        this.poiStore = poiMemStore;
        this.detailsStore = detailsMemStore;
    }
  },
};
