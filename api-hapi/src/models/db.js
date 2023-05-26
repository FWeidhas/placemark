import { userMemStore } from "./mem/user-mem-store.js";
import { poiMemStore } from "./mem/poi-mem-store.js";
import { detailsMemStore } from "./mem/details-mem-store.js";

export const db = {
  userStore: null,
  poiStore: null,
  detailsStore: null,

  init() {
    this.userStore = userMemStore;
    this.poiStore = poiMemStore;
    this.detailsStore = detailsMemStore;
  },
};
