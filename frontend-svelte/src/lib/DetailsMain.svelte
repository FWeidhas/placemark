<script lang="ts">
  import { onMount } from "svelte";
  import { placemarkService } from "../services/placemark-service";
  import { page } from '$app/stores';
  import AddDetailsForm from "./AddDetailsForm.svelte";
  import ListDetails from "./ListDetails.svelte";
  import AddImagesForm from "./AddImagesForm.svelte";
	import ImageGallery from "./ImageGallery.svelte";
	import EditDetailsForm from "./EditDetailsForm.svelte";
	import DetailsMap from "./DetailsMap.svelte";
	import WeatherPoiInfo from "./WeatherPoiInfo.svelte";

  let poi: any = {};
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
  <WeatherPoiInfo {poi} />
  <div class="columns">
    <div class="column is-half">
      {#if !poi.details}
        <AddDetailsForm {poiId} on:detailsAdded={handleDetailsProcessing}/>
      {:else}
        <ListDetails {poi} on:detailsDeleted={handleDetailsProcessing} />
        <EditDetailsForm {poi} on:detailsEdited={handleDetailsProcessing}/>
      {/if}
    </div>

    <div class="column is-half">
      <DetailsMap {poi} />
      <AddImagesForm {poi} on:imageAdded={handleDetailsProcessing}/>
    </div>
  </div>
  <ImageGallery {poi} on:imageDeleted={handleDetailsProcessing}/>
{/if}


