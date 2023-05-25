import { v4 } from "uuid";

let details = {};

export const detailsMemStore = {
  async getDetails() {
    return details;
  },

  async addDetails(locationId, detail) {
    details._id = v4();
    details.locationid = locationId;
    details.data = detail;
    return detail;
  },
  
  async getDetailsById(id) {
    if(details.locationid === id)
        return details;
    return undefined;
  },

  async deleteDetails(id) {
    if(details._id === id)
        details = {};
    return null;
  },

  async updateDetails(detail, updatedDetail) {
        detail.description = updatedDetail.description;
        detail.latitude = updatedDetail.latitude;
        detail.longitude = updatedDetail.longitude;
  },
};
