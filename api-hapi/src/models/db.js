import { userMemStore } from "./mem/user-mem-store.js";
import { poiMemStore } from "./mem/poi-mem-store.js";
import { detailsMemStore } from "./mem/details-mem-store.js";
import { connectMongo } from "./mongo/connect.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";
import { poiMongoStore } from "./mongo/poi-mongo-store.js";
import { detailsMongoStore } from "./mongo/details-mongo-store.js";

export const db = {
  userStore: null,
  poiStore: null,
  detailsStore: null,

  init(storeType) {
    switch (storeType) {
      case "mongo":
        this.userStore = userMongoStore;
        this.poiStore = poiMongoStore;
        this.detailsStore = detailsMongoStore;
        connectMongo();
        break;
      default:
        this.userStore = userMemStore;
        this.poiStore = poiMemStore;
        this.detailsStore = detailsMemStore;
    }
  },
};
