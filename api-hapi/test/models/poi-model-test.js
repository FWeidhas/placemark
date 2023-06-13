import { EventEmitter } from "events";
import { assert } from "chai";
import { db } from "../../src/models/db.js";
import { testPois, regensburg } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

EventEmitter.setMaxListeners(25);

suite("Point of Interest Model tests", () => {
  setup(async () => {
    db.init("mongo");
    await db.poiStore.deleteAllPois();
    for (let i = 0; i < testPois.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testPois[i] = await db.poiStore.addPoi(testPois[i]);
    }
  });

  test("create a Point of Interest", async () => {
    const poi = await db.poiStore.addPoi(regensburg);
    assertSubset(regensburg, poi);
    assert.isDefined(poi._id);
  });

  test("delete all Points of Interest", async () => {
    let returnedPois = await db.poiStore.getAllPois();
    assert.equal(returnedPois.length, 3);
    await db.poiStore.deleteAllPois();
    returnedPois = await db.poiStore.getAllPois();
    assert.equal(returnedPois.length, 0);
  });

  test("get a Point of Interest - success", async () => {
    const poi = await db.poiStore.addPoi(regensburg);
    const returnedPoi = await db.poiStore.getPoiById(poi._id);
    assertSubset(regensburg, poi);
  });

  test("delete One Point of Interest - success", async () => {
    const id = testPois[0]._id;
    await db.poiStore.deletePoiById(id);
    const returnedPois = await db.poiStore.getAllPois();
    assert.equal(returnedPois.length, testPois.length - 1);
    const deletedPoi = await db.poiStore.getPoiById(id);
    assert.isNull(deletedPoi);
  });

  test("get a Point of Interest - bad params", async () => {
    assert.isNull(await db.poiStore.getPoiById(""));
    assert.isNull(await db.poiStore.getPoiById());
  });

  test("delete One Point of Interest - fail", async () => {
    await db.poiStore.deletePoiById("bad-id");
    const allPois = await db.poiStore.getAllPois();
    assert.equal(testPois.length, allPois.length);
  });
});
