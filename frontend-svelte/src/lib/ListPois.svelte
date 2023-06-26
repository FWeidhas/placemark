<script>
  import { onMount } from "svelte";
  import { placemarkService } from "../services/placemark-service";
  import { user } from "../stores.js";

  const { id } = $user;

  /**
	 * @type {any[]}
	 */
  let poisList = [];
  onMount(async () => {
    poisList = await placemarkService.getPoisbyUserId();
  });
</script>

{#each poisList as poi}
  <div class="box box-link-hover-shadow">
    <h2 class="title">
      {poi.name}
    </h2>
    <div class="tags">
        <span class="tag is-primary has-background-info">{poi.category}</span>
    </div>
    <a href="/poi/{id}" class="button">
      <span class="icon is-small">
        <i class="fas fa-folder-open"></i>
      </span>
    </a>
    <a href="/dashboard/deletepoi/{id}" class="button">
      <i class="fas fa-trash"></i>
    </a>
    <a href="/dashboard/editpoi/{id}" class="button">
      <i class="fas fa-edit"></i>
    </a>
  </div>
{/each}