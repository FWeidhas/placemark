import { c as create_ssr_component, a as subscribe, d as each, e as escape, b as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import { u as user, l as latestUsers } from "../../../chunks/stores2.js";
import { p as placemarkService } from "../../../chunks/placemark-service.js";
import { B as Base } from "../../../chunks/base.js";
const ListUser = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => value);
  let users = [];
  $$unsubscribe_user();
  return `${each(users, (user2) => {
    return `<div class="box"><article class="media is-flex is-align-items-center"><div class="media-left" data-svelte-h="svelte-sa29rt"><i class="far fa-user" style="font-size: 48px;"></i></div> <div class="media-content is-flex"><div class="user-info mr-6"><p class="title is-4">${escape(user2.lastName)}, ${escape(user2.firstName)}</p> <p class="subtitle is-6">${escape(user2.email)}</p></div> <div class="user-pois has-text-centered"><p class="title is-4" data-svelte-h="svelte-5yckd4">Number of Poi&#39;s:</p> <p class="subtitle is-6">${escape(user2.poisCount)}</p> </div></div> <div class="media-right"><button class="button is-danger" data-svelte-h="svelte-tce5l8">Delete</button> </div></article> </div>`;
  })}`;
});
const AdminAnalytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let users = [];
  let pois = [];
  let numberofpoiswithcategory = [];
  latestUsers.subscribe(async (users2) => {
    if (users2) {
      await refreshAnalytics();
    }
  });
  async function refreshAnalytics() {
    users = await placemarkService.getAllUser();
    pois = await placemarkService.getAllPois();
    numberofpoiswithcategory = await placemarkService.getCategoryNumberofPois();
  }
  return `<div class="box"><article class="media is-flex is-align-items-center"><div class="media-content has-text-centered"><p class="title is-4" data-svelte-h="svelte-1rv71uq">Usercount:</p> <p class="subtitle is-6">${escape(users.length)}</p></div></article></div> <div class="box"><article class="media"><div class="media-content"><div class="content"><div class="columns has-text-centered">${each(numberofpoiswithcategory, (count) => {
    return `<div class="column"><p class="title is-4">${escape(count.category)}</p> <p class="subtitle is-6">Number of Poi&#39;s: ${escape(count.count)}</p> </div>`;
  })}</div></div></div></article></div> <div class="box"><article class="media is-flex is-align-items-center"><div class="media-content has-text-centered"><p class="title is-4" data-svelte-h="svelte-1451frp">Points of Interest count:</p> <p class="subtitle is-6">${escape(pois.length)}</p></div></article></div>`;
});
const AdminStatistics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let types = ["pie", "bar", "percentage", "donut"];
  let pois = [];
  let ownPois = [];
  let users = [];
  let type = "pie";
  let numberofpoiswithcategory = [];
  let numberofpoiswithcategoryuserbased = [];
  let categoryAllDistribution;
  let userpoiscount;
  let categoryOwnPoisDistribution;
  let numberPoisallown;
  latestUsers.subscribe(async (users2) => {
    if (users2) {
      await refreshChart();
    }
  });
  async function refreshChart() {
    ownPois = await placemarkService.getPoisbyUserId($user.id);
    pois = await placemarkService.getAllPois();
    numberofpoiswithcategory = await placemarkService.getCategoryNumberofPois();
    numberofpoiswithcategoryuserbased = await placemarkService.getCategoryNumberofPoisUser($user.id);
    if ($user.isAdmin) {
      users = await placemarkService.getPoisCountbyUser();
      console.log(users);
      userpoiscount = {
        labels: users.map((item) => item.email),
        datasets: [
          {
            values: users.map((item) => item.poisCount)
          }
        ]
      };
    }
    categoryAllDistribution = {
      labels: numberofpoiswithcategory.map((item) => item.category),
      datasets: [
        {
          values: numberofpoiswithcategory.map((item) => item.count)
        }
      ]
    };
    categoryOwnPoisDistribution = {
      labels: numberofpoiswithcategoryuserbased.map((item) => item.category),
      datasets: [
        {
          values: numberofpoiswithcategoryuserbased.map((item) => item.count)
        }
      ]
    };
    numberPoisallown = {
      labels: ["Other Pois", "Own Pois"],
      datasets: [
        {
          values: [pois.length - ownPois.length, ownPois.length]
        }
      ]
    };
  }
  $$unsubscribe_user();
  return `<div class="select"><select>${each(types, (type2) => {
    return `<option${add_attribute("value", type2, 0)}>${escape(type2)}</option>`;
  })}</select></div> ${userpoiscount ? `<section class="section"><div class="container"><h2 class="title" data-svelte-h="svelte-xhgabr">Number of spots of each user</h2> <div class="chart">${`${validate_component(Base, "Chart").$$render($$result, { data: userpoiscount, type }, {}, {})}`}</div></div></section>` : `<div class="loading-spinner" data-svelte-h="svelte-tavz5y"><span class="icon is-large"><i class="fas fa-spinner fa-pulse"></i></span></div>`} ${categoryAllDistribution ? `<section class="section"><div class="container"><h2 class="title" data-svelte-h="svelte-9u2p8y">Number of spots in each category</h2> <div class="chart">${`${validate_component(Base, "Chart").$$render($$result, { data: categoryAllDistribution, type }, {}, {})}`}</div></div></section>` : `<div class="loading-spinner" data-svelte-h="svelte-tavz5y"><span class="icon is-large"><i class="fas fa-spinner fa-pulse"></i></span></div>`} ${categoryOwnPoisDistribution ? `<section class="section"><div class="container"><h2 class="title" data-svelte-h="svelte-1gal2no">Number of spots in each category created by you</h2> <div class="chart">${`${validate_component(Base, "Chart").$$render($$result, { data: categoryOwnPoisDistribution, type }, {}, {})}`}</div></div></section>` : `<div class="loading-spinner" data-svelte-h="svelte-tavz5y"><span class="icon is-large"><i class="fas fa-spinner fa-pulse"></i></span></div>`} ${numberPoisallown ? `<section class="section"><div class="container"><h2 class="title" data-svelte-h="svelte-ub0xy3">Number of spots from other users and created by you</h2> <div class="chart">${`${validate_component(Base, "Chart").$$render($$result, { data: numberPoisallown, type }, {}, {})}`}</div></div></section>` : `<div class="loading-spinner" data-svelte-h="svelte-tavz5y"><span class="icon is-large"><i class="fas fa-spinner fa-pulse"></i></span></div>`}`;
});
const AdminMain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="title is-2 has-text-centered" data-svelte-h="svelte-zxih3i">Admin Dashboard:</h1> <div class="columns"><div class="column has-text-centered">${validate_component(AdminStatistics, "AdminStatistics").$$render($$result, {}, {}, {})}</div> <div class="column box has-text-centered">${validate_component(AdminAnalytics, "AdminAnalytics").$$render($$result, {}, {}, {})} ${validate_component(ListUser, "ListUser").$$render($$result, {}, {}, {})}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} ${validate_component(AdminMain, "AdminMain").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
