<script>
	import { createEventDispatcher } from 'svelte';
  import { placemarkService } from "../services/placemark-service.js";
  
    /**
     * @type {any}
     */
    export let poiId;

    const dispatch = createEventDispatcher();
  
    let description = "";
    let latitude = "";
    let longitude = "";
  
    let message = "";
  
    async function adddetails() {
      if (!poiId || !description || !latitude || !longitude) {
        message = "Please fill in all fields";
        return;
      }
  
      const details = {
        description: description,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      };
  
      const response = await placemarkService.addDetails(poiId, details);
      if (response) {
        dispatch('detailsAdded');
      } else {
        message = "Adding not completed - some error occurred";
      }
    }
</script>
  
<form class="box" on:submit|preventDefault={adddetails}>
<div class="field">
    <label for="description">Enter Point of Interest Details:</label>
    <div class="control">
    <textarea class="textarea" id="description" bind:value={description} placeholder="Enter Description"></textarea>
    </div>
</div>
<div class="field">
    <label for="latitude">Enter Latitude:</label>
    <div class="control">
    <input class="input" type="number" step="any" id="latitude" bind:value={latitude} placeholder="Enter Latitude">
    </div>
</div>
<div class="field">
    <label for="longitude">Enter Longitude:</label>
    <div class="control">
    <input class="input" type="number" step="any" id="longitude" bind:value={longitude} placeholder="Enter Longitude">
    </div>
</div>
<button class="button is-primary">Add Details</button>
<div class="box">
    {message}
</div>
</form>
  