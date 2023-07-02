import { c as create_ssr_component, d as each, b as add_attribute, e as escape, v as validate_component, a as subscribe } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import { p as placemarkService } from "../../../chunks/placemark-service.js";
import { u as user, a as latestPois } from "../../../chunks/stores2.js";
import { B as Base } from "../../../chunks/base.js";
const ListAllPois = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let categories = ["River", "Pond", "Sea", "Lake"];
  let filteredList = [];
  return `<div class="columns is-centered"><div class="column is-narrow"><div class="select"><select><option value="Select category" data-svelte-h="svelte-1je6xee">Select category</option>${each(categories, (category) => {
    return `<option${add_attribute("value", category, 0)}>${escape(category)}</option>`;
  })}</select></div></div></div> ${filteredList ? `${each(filteredList, (poi) => {
    return `<div class="box box-link-hover-shadow"><h2 class="title">${escape(poi.name)}</h2> <div class="tags is-flex is-centered"><span class="tag is-primary has-background-info">${escape(poi.category)}</span></div> <button class="button" data-svelte-h="svelte-35gl9b"><span class="icon is-small"><i class="fas fa-folder-open"></i> </span></button> </div>`;
  })}` : `<div class="loading-spinner" data-svelte-h="svelte-lnd492"><span class="icon is-large"><i class="fas fa-spinner fa-pulse"></i></span></div>`}`;
});
const DashboardMain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let switcher = false;
  return `<section class="section"><div class="container"><div class="columns is-vcentered" data-svelte-h="svelte-1jlisvv"><div class="column"><h1 class="title is-1">Dashboard</h1></div></div> <div class="columns is-centered"><div class="column is-narrow"><div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"${add_attribute("checked", switcher, 1)}> <label class="form-check-label" for="flexSwitchCheckDefault" data-svelte-h="svelte-jaud93">Your own Spots</label></div></div></div></div></section> ${`${validate_component(ListAllPois, "ListAllPois").$$render($$result, {}, {}, {})}`}`;
});
const PoiStatistics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let types = ["pie", "bar", "percentage", "donut"];
  let pois = [];
  let ownPois = [];
  let type = "pie";
  let numberofpoiswithcategory = [];
  let numberofpoiswithcategoryuserbased = [];
  let categoryAllDistribution;
  let categoryOwnPoisDistribution;
  let numberPoisallown;
  latestPois.subscribe(async (pois2) => {
    if (pois2) {
      await refreshChart();
    }
  });
  async function refreshChart() {
    ownPois = await placemarkService.getPoisbyUserId($user.id);
    pois = await placemarkService.getAllPois();
    numberofpoiswithcategory = await placemarkService.getCategoryNumberofPois();
    numberofpoiswithcategoryuserbased = await placemarkService.getCategoryNumberofPoisUser($user.id);
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
  })}</select></div> ${categoryAllDistribution ? `<section class="section"><div class="container"><h2 class="title" data-svelte-h="svelte-9u2p8y">Number of spots in each category</h2> <div class="chart">${`${validate_component(Base, "Chart").$$render($$result, { data: categoryAllDistribution, type }, {}, {})}`}</div></div></section>` : `<div class="loading-spinner" data-svelte-h="svelte-lnd492"><span class="icon is-large"><i class="fas fa-spinner fa-pulse"></i></span></div>`} ${categoryOwnPoisDistribution ? `<section class="section"><div class="container"><h2 class="title" data-svelte-h="svelte-1gal2no">Number of spots in each category created by you</h2> <div class="chart">${`${validate_component(Base, "Chart").$$render($$result, { data: categoryOwnPoisDistribution, type }, {}, {})}`}</div></div></section>` : `<div class="loading-spinner" data-svelte-h="svelte-lnd492"><span class="icon is-large"><i class="fas fa-spinner fa-pulse"></i></span></div>`} ${numberPoisallown ? `<section class="section"><div class="container"><h2 class="title" data-svelte-h="svelte-ub0xy3">Number of spots from other users and created by you</h2> <div class="chart">${`${validate_component(Base, "Chart").$$render($$result, { data: numberPoisallown, type }, {}, {})}`}</div></div></section>` : `<div class="loading-spinner" data-svelte-h="svelte-lnd492"><span class="icon is-large"><i class="fas fa-spinner fa-pulse"></i></span></div>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })} <div class="columns"><div class="column has-text-centered">${validate_component(PoiStatistics, "PoiStatistics").$$render($$result, {}, {}, {})}</div> <div class="column box has-text-centered">${validate_component(DashboardMain, "DashboardMain").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
