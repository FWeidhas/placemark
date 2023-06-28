<script>
// @ts-nocheck

  import { onMount } from "svelte";
  import { placemarkService } from "../services/placemark-service";
  import { page } from '$app/stores';
  import AddDetailsForm from "./AddDetailsForm.svelte";
  import ListDetails from "./ListDetails.svelte";
  import ListImages from "./ListImages.svelte";
	import ImageGallery from "./ImageGallery.svelte";

  let poi = {};
  let poiId = $page.params.slug;

  onMount(async () => {
    poi = await placemarkService.getPoibyId(poiId);
  });

  async function handleDetailsProcessing() {
    poi = await placemarkService.getPoibyId(poiId);
  }

</script>

{#if poi && poi.name}
  <h1 class="title is-4">Details of {poi.name}:</h1>

  <div class="columns">
    <div class="column is-half">
      {#if !poi.details}
        <AddDetailsForm {poiId} on:detailsAdded={handleDetailsProcessing}/>
      {:else}
        <ListDetails {poi} on:detailsDeleted={handleDetailsProcessing} />
      {/if}
    </div>

    <div class="column is-half">
      <ListImages {poi} on:imageAdded={handleDetailsProcessing}/>
    </div>
  </div>

  <ImageGallery {poi} on:imageDeleted={handleDetailsProcessing}/>
{/if}


