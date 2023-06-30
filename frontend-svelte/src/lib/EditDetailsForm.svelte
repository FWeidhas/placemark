<script>
	import { createEventDispatcher } from 'svelte';
  import { placemarkService } from "../services/placemark-service.js";
  
    /**
     * @type {any}
     */
    export let poi;

    const dispatch = createEventDispatcher();
  
    let description = "";
    let latitude = "";
    let longitude = "";
  
    let message = "";
  
    async function editdetails() {
        if (!poi || (!description && !latitude && !longitude)) {
            message = "Please fill in at least one field";
            return;
        }
  
        const details = {
            description: description || poi.details.description,
            latitude: parseFloat(latitude) || poi.details.latitude,
            longitude: parseFloat(longitude) || poi.details.longitude,
            poiid: poi._id,
        };

  
        const response = await placemarkService.editdetails(poi.details._id, details);
        if (response) {
            dispatch('detailsEdited');
            description = "";
            latitude = "";
            longitude = "";
            message = "";
        } else {
            message = "Editing not completed - some error occurred";
        }
    }
</script>
  
<form class="box" on:submit|preventDefault={editdetails}>
<div class="field">
    <label for="description">Edit Point of Interest Details:</label>
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
<button class="button is-primary">Edit Details</button>
<div class="box">
    {message}
</div>
</form>
  