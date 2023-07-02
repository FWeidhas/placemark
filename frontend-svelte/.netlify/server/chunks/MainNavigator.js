import { c as create_ssr_component, a as subscribe } from "./ssr.js";
import { u as user } from "./stores2.js";
const MainNavigator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `<div class="box has-text-centered columns m-2">${$user.isAdmin ? `<a href="/admin" class="column" data-svelte-h="svelte-kteg9g"><i class="fas fa-cogs fa-3x" style="color:rgb(41, 128, 185)"></i></a>` : ``} <a href="/addpoi" class="column" data-svelte-h="svelte-s1r3hk"><i class="fas fa-plus fa-3x" style="color:rgb(153, 196, 74)"></i></a> <a href="/map" class="column " data-svelte-h="svelte-1gnfxbw"><i class="fas fa-map-marked-alt fa-3x" style="color:rgb(102, 153, 255)"></i></a> <a href="/charts" class="column is-2 mx-2" data-svelte-h="svelte-160gwra"><i class="fas fa-chart-line fa-3x" style="color:rgb(149, 93, 176)"></i></a> <a href="/dashboard" class="column" data-svelte-h="svelte-g6jwid"><i class="fas fa-th-list fa-3x" style="color:rgb(63, 122, 139)"></i></a> <a href="/logout" class="column" data-svelte-h="svelte-mxz6cv"><i class="fas fa-sign-out-alt fa-3x" style="color:rgb(156, 70, 128)"></i></a></div>`;
});
export {
  MainNavigator as M
};
