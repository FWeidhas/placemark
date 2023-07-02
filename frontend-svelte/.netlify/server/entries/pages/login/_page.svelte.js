import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Header.js";
import { W as WelcomeNavigator } from "../../../chunks/WelcomeNavigator.js";
const LoginForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  return `<form><div class="field"><label class="label" for="email" data-svelte-h="svelte-10y9g0t">Email</label> <input class="input" id="email" name="email" placeholder="Enter email" type="text"${add_attribute("value", email, 0)}></div> <div class="field"><label class="label" for="password" data-svelte-h="svelte-m1esth">Password</label> <input class="input" id="password" name="password" placeholder="Enter Password" type="password"${add_attribute("value", password, 0)}></div> <div class="field is-grouped" data-svelte-h="svelte-1qx54me"><button class="button is-link">Log In</button></div></form> ${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(WelcomeNavigator, "WelcomeNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} <div class="columns"><div class="column has-text-centered" data-svelte-h="svelte-1spafrv"><img alt="fishing" src="/sea-fishing.jpg" width="80%"></div> <div class="column"><div class="box"><h1 class="title" data-svelte-h="svelte-x3hgi0">Login</h1> ${validate_component(LoginForm, "LoginForm").$$render($$result, {}, {}, {})}</div></div></div>`;
});
export {
  Page as default
};
