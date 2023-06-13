import { EventEmitter } from "events";
import { assert } from "chai";
import { placemarkService } from "./placemark-service.js";
import { assertSubset } from "../test-utils.js";
import { maggie, testPois, regensburg } from "../fixtures.js";


suite("Point of Interest API tests", () => {

  let user = null;

  setup(async () => {
    await placemarkService.deleteAllUsers();
    await placemarkService.deleteAllPois();

    user = await placemarkService.createUser(maggie);
    regensburg.userid = user._id;
  });

  teardown(async () => {
    
  });

  test("create Point of Interest", async () => {
    const returnedPoi = await placemarkService.createPoi(regensburg);
    assert.isNotNull(returnedPoi);
    assertSubset(regensburg, returnedPoi);
  });

  test("delete a Point of Interest", async () => {
    const poi = await placemarkService.createPoi(regensburg);
    const response = await placemarkService.deleteOnePoi(poi._id);
    assert.equal(response.status, 204);
    try {
      const returnedPoi = await placemarkService.getPoiById(poi._id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Point of Interest with this id", "Incorrect Response Message");
    }
  });

  test("create multiple Points of Interest", async () => {
    for (let i = 0; i < testPois.length; i += 1) {
      testPois[i].userid = user._id;
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createPoi(testPois[i]);
    }
    let returnedPois = await placemarkService.getAllPois();
    assert.equal(returnedPois.length, testPois.length);
    await placemarkService.deleteAllPois();
    returnedPois = await placemarkService.getAllPois();
    assert.equal(returnedPois.length, 0);
  });

  test("remove non-existant Point of Interest", async () => {
    try {
      const response = await placemarkService.deleteOnePoi("not an id");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No Point if Interest with this id" || "id with value not an id fails to match the required pattern: /^[0-9a-fA-F]{24}$/", "Incorrect Response Message");
    }
  });
});
