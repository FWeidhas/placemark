<script>
  import { onMount } from "svelte";
  import { placemarkService } from "../services/placemark-service";

  /**
	 * @type {any[]}
	 */
  let poisList = [];
  onMount(async () => {
    poisList = await placemarkService.getPois();
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
    <a href="/poi/{_id}" class="button">
      <span class="icon is-small">
        <i class="fas fa-folder-open"></i>
      </span>
    </a>
    <a href="/dashboard/deletepoi/{_id}" class="button">
      <i class="fas fa-trash"></i>
    </a>
    <a href="/dashboard/editpoi/{_id}" class="button">
      <i class="fas fa-edit"></i>
    </a>
  </div>
{/each}