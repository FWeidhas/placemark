<script>
  import { onMount } from "svelte";
  import { placemarkService } from "../services/placemark-service";
  import { user } from "../stores.js";

  /**
	 * @type {any[]}
	 */
  let poisList = [];
  onMount(async () => {
    poisList = await placemarkService.getPoisbyUserId($user.id);
  });

  /**
	 * @param {string} id
	 */
  async function deletePoi(id) {
    await placemarkService.deletePoibyId(id);
    poisList = await placemarkService.getPoisbyUserId($user.id);
    console.log(poisList);
  };
</script>

{#each poisList as poi}
  <div class="box box-link-hover-shadow">
    <h2 class="title">
      {poi.name}
    </h2>
    <div class="tags is-flex is-centered">
        <span class="tag is-primary has-background-info">{poi.category}</span>
    </div>
    <a href="/poi/{poi._id}" class="button">
      <span class="icon is-small">
        <i class="fas fa-folder-open"></i>
      </span>
    </a>
    <button class="button" on:click={() => deletePoi(poi._id)}>
      <i class="fas fa-trash"></i>
    </button>
    <a href="/dashboard/editpoi/{poi._id}" class="button">
      <i class="fas fa-edit"></i>
    </a>
  </div>
{/each}