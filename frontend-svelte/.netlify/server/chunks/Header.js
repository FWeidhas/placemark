import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "./ssr.js";
import { u as user } from "./stores2.js";
const TitleBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { title = "" } = $$props;
  let { subTitle = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0)
    $$bindings.subTitle(subTitle);
  $$unsubscribe_user();
  return `<div class="box has-text-centered columns m-2 is-vcentered"><div class="column"><div class="title is-5">${escape(title)}</div> ${$user.id ? `<div class="subtitle is-5" data-svelte-h="svelte-1ne4n58">Organise and share your favourite fishing spots</div>` : `<div class="subtitle is-5">${escape(subTitle)}</div>`}</div> ${``} <div class="column" data-svelte-h="svelte-mobzr2"><i style="font-size: 48px; color: rgb(74, 180, 118);" class="far fa-map"></i> <i style="font-size: 48px; color: rgb(153, 14, 14);" class="fas fa-map-marker-alt"></i> <div class="is-size-7">Placemark</div></div></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="columns is-vcentered"><div class="column is-half">${validate_component(TitleBar, "TitleBar").$$render(
    $$result,
    {
      title: "Placemark",
      subTitle: "Sign up or Log in"
    },
    {},
    {}
  )}</div> <div class="column is-half">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Header as H
};
