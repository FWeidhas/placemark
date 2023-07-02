import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Header.js";
import { W as WelcomeNavigator } from "../../../chunks/WelcomeNavigator.js";
const SignupForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let firstName = "";
  let lastName = "";
  let email = "";
  let password = "";
  return `<form><div class="field is-horizontal"><div class="field-body"><div class="field"><label for="firstname" class="label" data-svelte-h="svelte-3usa59">First Name</label> <input id="firstname" class="input" type="text" placeholder="Enter first name" name="firstName"${add_attribute("value", firstName, 0)}></div> <div class="field"><label for="lastname" class="label" data-svelte-h="svelte-ppz4fd">Last Name</label> <input id="lastname" class="input" type="text" placeholder="Enter last name" name="lastName"${add_attribute("value", lastName, 0)}></div></div></div> <div class="field"><label for="email" class="label" data-svelte-h="svelte-10c5xex">Email</label> <input id="email" class="input" type="text" placeholder="Enter email" name="email"${add_attribute("value", email, 0)}></div> <div class="field"><label for="password" class="label" data-svelte-h="svelte-19q4ukz">Password</label> <input id="password" class="input" type="password" placeholder="Enter Password" name="password"${add_attribute("value", password, 0)}></div> <div class="field is-grouped" data-svelte-h="svelte-pbplrt"><button class="button is-link">Sign Up</button></div></form> ${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(WelcomeNavigator, "WelcomeNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} <div class="columns"><div class="column"><div class="box"><h1 class="title" data-svelte-h="svelte-x3hgi0">Login</h1> ${validate_component(SignupForm, "SignupForm").$$render($$result, {}, {}, {})}</div></div> <div class="column has-text-centered" data-svelte-h="svelte-1ycfuqj"><img alt="fishing" src="/sea-fishing.jpg" width="80%"></div></div>`;
});
export {
  Page as default
};
