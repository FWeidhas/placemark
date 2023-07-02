import { c as create_ssr_component, a as subscribe, b as add_attribute, d as each, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { H as Header } from "../../../../chunks/Header.js";
import { M as MainNavigator } from "../../../../chunks/MainNavigator.js";
import { p as page } from "../../../../chunks/stores.js";
const EditPoiForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.params.slug;
  let name = "";
  let categories = ["River", "Pond", "Sea", "Lake"];
  let message = "Edit your spot with name and category";
  $$unsubscribe_page();
  return `<form><div class="field"><label class="label" for="name" data-svelte-h="svelte-9cdvb0">Point of Interest Name</label> <input class="input" id="name" name="name" type="text"${add_attribute("value", name, 0)}></div> <div class="field"><div class="select"><select><option disabled hidden value="Select category" data-svelte-h="svelte-173s6ai">Select category</option>${each(categories, (category) => {
    return `<option${add_attribute("value", category, 0)}>${escape(category)}</option>`;
  })}</select></div></div> <div class="field" data-svelte-h="svelte-1vd6efi"><div class="control"><button class="button is-link is-light">Edit</button></div></div> <div class="box">${escape(message)}</div></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} <div class="columns is-vcentered"><div class="column has-text-centered" data-svelte-h="svelte-1hgwyqh"><img alt="fishing" src="/lake-fishing.jpg" width="80%"></div> <div class="column box has-text-centered"><h1 class="title is-4" data-svelte-h="svelte-1h49t9">Edit your favourite fishing spots</h1> ${validate_component(EditPoiForm, "EditPoiForm").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
