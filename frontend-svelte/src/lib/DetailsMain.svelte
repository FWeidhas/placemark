<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";
    import { page } from '$app/stores';
    import AddDetailsForm from "./AddDetailsForm.svelte";
    import ListDetails from "./ListDetails.svelte";

    let poi = {};
    let poiId = $page.params.slug;

    onMount(async () => {
      poi = await placemarkService.getPoibyId(poiId);
    });
  
</script>

{#if poi && poi.name}
  <h1 class="title is-4">Details of {poi.name}:</h1>
  {#if !poi.details}
    <AddDetailsForm {poiId} />
  {:else}
    <ListDetails />
  {/if}
{/if}