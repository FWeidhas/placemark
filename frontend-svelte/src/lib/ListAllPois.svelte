<script>
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";
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
      poisList = await placemarkService.getAllPois();
      filteredList = poisList;
    });

    function handleSelectedCategory () {
        console.log(selectedCategory);
        if (selectedCategory === "Select category") {
            filteredList = poisList;
        } else {
            filteredList = poisList.filter(poi => poi.category === selectedCategory);
        }
    };
  
    /**
       * @param {any} id
       */
    function gotoDetails(id) {
      goto("/details/" + id);
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
</div>
{/each}