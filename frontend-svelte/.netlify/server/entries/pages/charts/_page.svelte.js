import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
const TrendsProjections = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="title is-1 has-text-centered" data-svelte-h="svelte-5iuwwp">Trends and Projections:</h1> ${`<div class="loading-spinner has-text-centered" data-svelte-h="svelte-1m5x62z"><span class="icon is-large"><i class="fas fa-spinner fa-pulse"></i></span></div>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(TrendsProjections, "TrendsProjections").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
