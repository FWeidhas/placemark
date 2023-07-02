import { c as create_ssr_component, a as subscribe, d as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import { u as user } from "../../../chunks/stores2.js";
const PoiMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => value);
  let notes = [];
  $$unsubscribe_user();
  return `<div class="columns is-multiline" data-svelte-h="svelte-b45so6"><div class="column is-half"><div class="box" id="poi-terrainmap" style="height: 75vh"></div></div> <div class="column is-half"><div class="box" id="poi-satmap" style="height: 75vh"></div></div> <div class="column is-half"><div class="box" id="poi-contextmap" style="height: 75vh"></div></div> <div class="column is-half"><div class="box" id="poi-weathermap" style="height: 75vh"></div></div></div> ${notes.length > 0 ? `<div class="box">${each(notes, (note) => {
    return `<div class="notification is-danger">${escape(note)}</div>`;
  })}</div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(PoiMap, "PoiMap").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
