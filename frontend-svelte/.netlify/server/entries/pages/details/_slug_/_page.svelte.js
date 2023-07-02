import { c as create_ssr_component, f as createEventDispatcher, e as escape, b as add_attribute, d as each, a as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { b as latestDetails } from "../../../../chunks/stores2.js";
import { H as Header } from "../../../../chunks/Header.js";
import { M as MainNavigator } from "../../../../chunks/MainNavigator.js";
const AddDetailsForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { poiId } = $$props;
  createEventDispatcher();
  let latitude = "";
  let longitude = "";
  let message = "";
  if ($$props.poiId === void 0 && $$bindings.poiId && poiId !== void 0)
    $$bindings.poiId(poiId);
  return `<form class="box"><div class="field"><label for="description" data-svelte-h="svelte-1no0v3t">Enter Point of Interest Details:</label> <div class="control"><textarea class="textarea" id="description" placeholder="Enter Description">${escape("")}</textarea></div></div> <div class="field"><label for="latitude" data-svelte-h="svelte-10b5d2">Enter Latitude:</label> <div class="control"><input class="input" type="number" step="any" id="latitude" placeholder="Enter Latitude"${add_attribute("value", latitude, 0)}></div></div> <div class="field"><label for="longitude" data-svelte-h="svelte-6td7cs">Enter Longitude:</label> <div class="control"><input class="input" type="number" step="any" id="longitude" placeholder="Enter Longitude"${add_attribute("value", longitude, 0)}></div></div> <button class="button is-primary" data-svelte-h="svelte-22dkxt">Add Details</button> <div class="box">${escape(message)}</div></form>`;
});
const ListDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { poi } = $$props;
  createEventDispatcher();
  if ($$props.poi === void 0 && $$bindings.poi && poi !== void 0)
    $$bindings.poi(poi);
  return `<div class="box"><div class="block">${escape(poi.details.description)}</div> <table class="table is-fullwidth"><thead data-svelte-h="svelte-1wjuc4o"><tr><th class="has-text-centered">Latitude</th> <th class="has-text-centered">Longitude</th></tr></thead> <tbody><tr><td class="has-text-centered">${escape(poi.details.latitude)}</td> <td class="has-text-centered">${escape(poi.details.longitude)}</td></tr></tbody></table> <button class="ui icon button" data-svelte-h="svelte-1bdbrmu"><span class="icon is-small"><i class="fas fa-trash"></i></span></button></div>`;
});
const AddImagesForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { poi } = $$props;
  createEventDispatcher();
  let message = "Add your images for your spot";
  if ($$props.poi === void 0 && $$bindings.poi && poi !== void 0)
    $$bindings.poi(poi);
  return `<div class="card mb-5"><div class="card-content"><form enctype="multipart/form-data"><div id="file-select" class="file has-name is-fullwidth"><label class="file-label"><input multiple class="file-input" name="imagefiles" type="file" accept="image/png, image/jpeg"> <span class="file-cta" data-svelte-h="svelte-1fgj0fq"><span class="file-icon"><i class="fas fa-upload"></i></span> <span class="file-label">Choose a file…</span></span> <span class="file-name"></span></label></div> <button type="submit" class="${["button is-info mt-2", ""].join(" ").trim()}" data-svelte-h="svelte-my32ts">Upload</button></form> <div class="mt-3">${escape(message)}</div></div></div>`;
});
const ImageGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { poi } = $$props;
  createEventDispatcher();
  if ($$props.poi === void 0 && $$bindings.poi && poi !== void 0)
    $$bindings.poi(poi);
  return `<div class="columns is-multiline">${poi.img ? `${each(Object.entries(poi.img), ([i, img]) => {
    return `<div class="column is-4"><div class="card mb-4"><div class="card-image"><figure class="image is-256x256"> <img${add_attribute("src", img, 0)}> </figure></div> <div class="card-content"><div class="has-text-centered mt-4"><button class="button" data-svelte-h="svelte-fhjswc"><i class="fas fa-trash"></i> </button></div> </div></div> </div>`;
  })}` : ``}</div>`;
});
const EditDetailsForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { poi } = $$props;
  createEventDispatcher();
  let latitude = "";
  let longitude = "";
  let message = "";
  if ($$props.poi === void 0 && $$bindings.poi && poi !== void 0)
    $$bindings.poi(poi);
  return `<form class="box"><div class="field"><label for="description" data-svelte-h="svelte-1j5hsl5">Edit Point of Interest Details:</label> <div class="control"><textarea class="textarea" id="description" placeholder="Enter Description">${escape("")}</textarea></div></div> <div class="field"><label for="latitude" data-svelte-h="svelte-10b5d2">Enter Latitude:</label> <div class="control"><input class="input" type="number" step="any" id="latitude" placeholder="Enter Latitude"${add_attribute("value", latitude, 0)}></div></div> <div class="field"><label for="longitude" data-svelte-h="svelte-6td7cs">Enter Longitude:</label> <div class="control"><input class="input" type="number" step="any" id="longitude" placeholder="Enter Longitude"${add_attribute("value", longitude, 0)}></div></div> <button class="button is-primary" data-svelte-h="svelte-gmscyk">Edit Details</button> <div class="box">${escape(message)}</div></form>`;
});
const DetailsMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { poi } = $$props;
  latestDetails.subscribe((details) => {
  });
  if ($$props.poi === void 0 && $$bindings.poi && poi !== void 0)
    $$bindings.poi(poi);
  return `${``} <div class="box" id="poi-map" style="height:75vh"></div>`;
});
const weatherIcons = "";
const WeatherPoiInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { poi } = $$props;
  if ($$props.poi === void 0 && $$bindings.poi && poi !== void 0)
    $$bindings.poi(poi);
  return `<div class="container has-text-centered mt-5 mb-5">${`<p data-svelte-h="svelte-1ypmcd6">Loading weather data...</p>`}</div>`;
});
const DetailsMain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let poi = {};
  let poiId = $page.params.slug;
  $$unsubscribe_page();
  return `${poi && poi.name ? `<h1 class="title is-4">Details of ${escape(poi.name)}:</h1> ${validate_component(WeatherPoiInfo, "WeatherPoiInfo").$$render($$result, { poi }, {}, {})} <div class="columns"><div class="column is-half">${!poi.details ? `${validate_component(AddDetailsForm, "AddDetailsForm").$$render($$result, { poiId }, {}, {})}` : `${validate_component(ListDetails, "ListDetails").$$render($$result, { poi }, {}, {})} ${validate_component(EditDetailsForm, "EditDetailsForm").$$render($$result, { poi }, {}, {})}`}</div> <div class="column is-half">${validate_component(DetailsMap, "DetailsMap").$$render($$result, { poi }, {}, {})} ${validate_component(AddImagesForm, "AddImagesForm").$$render($$result, { poi }, {}, {})}</div></div> ${validate_component(ImageGallery, "ImageGallery").$$render($$result, { poi }, {}, {})}` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} <div class="columns"><div class="column box has-text-centered">${validate_component(DetailsMain, "DetailsMain").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
