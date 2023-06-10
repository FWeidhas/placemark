import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { maggie, regensburg, testPois, testDetails, rgbdetails } from "../fixtures.js";

suite("Details API tests", () => {
  let user = null;
  let poi = null;

  setup(async () => {
    await placemarkService.deleteAllPois();
    await placemarkService.deleteAllUsers();
    await placemarkService.deleteAllDetails();
    user = await placemarkService.createUser(maggie);
    regensburg.userid = user._id;
    poi = await placemarkService.createPoi(regensburg);
  });

  teardown(async () => {});

  test("create details", async () => {
    const returnedDetails = await placemarkService.createDetails(poi._id, rgbdetails);
    assertSubset(rgbdetails, returnedDetails);
  });

  test("create Multiple details", async () => {
    for (let i = 0; i < testDetails.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createDetails(poi._id, testDetails[i]);
    }
    const returnedDetails = await placemarkService.getAllDetails();
    assert.equal(returnedDetails.length, testDetails.length);
    for (let i = 0; i < returnedDetails.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const details = await placemarkService.getDetailsById(returnedDetails[i]._id);
      assertSubset(details, returnedDetails[i]);
    }
  });

  test("Delete DetailsApi", async () => {
    for (let i = 0; i < testDetails.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createDetails(poi._id, testDetails[i]);
    }
    let returnedDetails = await placemarkService.getAllDetails();
    
    assert.equal(returnedDetails.length, testDetails.length);
    for (let i = 0; i < returnedDetails.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const details = await placemarkService.deleteDetailsbyId(returnedDetails[i]._id);
    }
    returnedDetails = await placemarkService.getAllDetails();
    assert.equal(returnedDetails.length, 0);
  });

  test("Get details by Point of Interest ID", async () => {
    await placemarkService.createDetails(poi._id, rgbdetails);
    const returnedDetails = await placemarkService.getDetailsByPoiId(poi._id);
    assertSubset(rgbdetails, returnedDetails);
  });
});
