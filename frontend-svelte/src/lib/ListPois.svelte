<script>
  import { onMount } from "svelte";
  import { placemarkService } from "../services/placemark-service";
  import { user } from "../stores.js";
	import { goto } from "$app/navigation";

  let categories = ["River", "Pond", "Sea", "Lake"];
  let selectedCategory = "Select category";

  /**
	 * @type {any[]}
	 */
  let poisList = [];

  /**
	 * @type {any[]}
	 */
   let filteredList = [];

  onMount(async () => {
    poisList = await placemarkService.getPoisbyUserId($user.id);
    filteredList = poisList;
  });

  function handleSelectedCategory () {
        if (selectedCategory === "Select category") {
            filteredList = poisList;
        } else {
            filteredList = poisList.filter(poi => poi.category === selectedCategory);
        }
  };

  /**
	 * @param {string} id
	 */
  async function deletePoi(id) {
    await placemarkService.deletePoibyId(id);
    poisList = await placemarkService.getPoisbyUserId($user.id);
  };

  /**
	 * @param {any} id
	 */
  function gotoDetails(id) {
    goto("/details/" + id);
  }

  /**
	 * @param {string} id
	 */
  function gotoEdit(id) {
    goto("/edit/" + id)
  }
</script>

<div class="columns is-centered">
  <div class="column is-narrow">
      <div class="select">
          <select bind:value={selectedCategory} on:change={handleSelectedCategory}>
              <option>Select category</option>
              {#each categories as category}
                  <option>{category}</option>
              {/each}
          </select>
      </div>
  </div>
</div>
{#if !(filteredList.length > 0)}
  <div class="loading-spinner">
    <span class="icon is-large">
      <i class="fas fa-spinner fa-pulse"></i>
    </span>
  </div>
{/if}
{#if filteredList}
{#each filteredList as poi}
  <div class="box box-link-hover-shadow">
    <h2 class="title">
      {poi.name}
    </h2>
    <div class="tags is-flex is-centered">
        <span class="tag is-primary has-background-info">{poi.category}</span>
    </div>
    <button class="button" on:click={() => gotoDetails(poi._id)}>
      <span class="icon is-small">
        <i class="fas fa-folder-open"></i>
      </span>
    </button>
    <button class="button" on:click={() => deletePoi(poi._id)}>
      <i class="fas fa-trash"></i>
    </button>
    <button class="button" on:click={() => gotoEdit(poi._id)}>
      <i class="fas fa-edit"></i>
    </button>
  </div>
{/each}    
{/if}