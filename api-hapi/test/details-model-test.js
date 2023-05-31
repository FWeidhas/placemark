import { assert } from "chai";
import { db } from "../src/models/db.js";
import { testPois, testDetails, weiden, regensburg, rgbdetails, testUsers } from "./fixtures.js";
import { assertSubset } from "./test-utils.js";

suite("Details Model tests", () => {

  setup(async () => {
    db.init("mongo");
    await db.poiStore.deleteAllPois();
    await db.detailsStore.deleteAllDetails();
    for (let i = 0; i < testDetails.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testPois[i] = await db.poiStore.addPoi(testPois[i]);
      // eslint-disable-next-line no-await-in-loop
      testDetails[i] = await db.detailsStore.addDetails(testPois[i]._id, testDetails[i]);
    }
  });

  test("create details", async () => {
    const regensburgDetails = await db.poiStore.addPoi(regensburg);
    const details = await db.detailsStore.addDetails(regensburgDetails._id, rgbdetails);
    assert.isNotNull(details._id);
    assertSubset (rgbdetails, details);
  });

  test("delete all details", async () => {
    const details = await db.detailsStore.getAllDetails();
    assert.equal(testDetails.length, details.length);
    await db.detailsStore.deleteAllDetails();
    const newDetails = await db.detailsStore.getAllDetails();
    assert.equal(0, newDetails.length);
  });

  test("get details - success", async () => {
    const regensburgDetails = await db.poiStore.addPoi(weiden);
    const details = await db.detailsStore.addDetails(regensburgDetails._id, rgbdetails)
    const newDetails = await db.detailsStore.getDetailsByPoiId(regensburgDetails._id);
    assertSubset (rgbdetails, newDetails);
  });

  test("delete details - success", async () => {
    await db.detailsStore.deleteTrack(testDetails[0]._id);
    const tracks = await db.detailsStore.getAllDetails();
    assert.equal(tracks.length, testPlaylists.length - 1);
    const deletedTrack = await db.detailsStore.getTrackById(testDetails[0]._id);
    assert.isNull(deletedTrack);
  });

  test("get details - bad params", async () => {
    assert.isNull(await db.detailsStore.getTrackById(""));
    assert.isNull(await db.detailsStore.getTrackById());
  });

  test("delete details - fail", async () => {
    await db.detailsStore.deleteTrack("bad-id");
    const tracks = await db.detailsStore.getAllDetails();
    assert.equal(tracks.length, testPlaylists.length);
  });
});
