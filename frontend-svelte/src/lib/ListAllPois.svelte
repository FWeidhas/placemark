<script lang="ts">
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";
    import { goto } from "$app/navigation";
    
    
    let categories = ["River", "Pond", "Sea", "Lake"];
    let selectedCategory = "Select category";
    let poisList: any[] = [];
    let filteredList: any[] = [];


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
  
    function gotoDetails(id: string) {
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
</div>
{/each}
{:else}
<div class="loading-spinner">
    <span class="icon is-large">
      <i class="fas fa-spinner fa-pulse"></i>
    </span>
</div>    
{/if}