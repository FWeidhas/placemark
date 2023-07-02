import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { H as Header } from "../../chunks/Header.js";
import { W as WelcomeNavigator } from "../../chunks/WelcomeNavigator.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(WelcomeNavigator, "WelcomeNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} <div class="columns is-vcentered content" data-svelte-h="svelte-3bbeco"><div class="column has-text-centered"><img width="80%" src="/fishing-boat.jpg" alt="fishing"></div> <div class="column"><h1 class="title">Organise your favourite fishing spots</h1> <p>Post your spots with description, location and pictures</p></div></div>`;
});
export {
  Page as default
};
