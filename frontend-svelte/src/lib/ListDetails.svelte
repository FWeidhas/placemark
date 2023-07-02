<script lang="ts">
  import { createEventDispatcher } from 'svelte';
	import { placemarkService } from '../services/placemark-service';
  
    /**
	 * @type {{ details: { _id: string; description: any; latitude: any; longitude: any; }; }}
	 */
     export let poi;
    const dispatch = createEventDispatcher();
  
    async function deleteDetails() {
      await placemarkService.deleteDetailsbyId(poi.details._id);
      dispatch('detailsDeleted');
    }
  </script>
  
<div class="box">
  <div class="block">
    {poi.details.description}
  </div>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th class="has-text-centered">Latitude</th>
        <th class="has-text-centered">Longitude</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="has-text-centered">{poi.details.latitude}</td>
        <td class="has-text-centered">{poi.details.longitude}</td>
      </tr>
    </tbody>
  </table>
  <button class="ui icon button" on:click={deleteDetails}>
    <span class="icon is-small">
      <i class="fas fa-trash"></i>
    </span>
  </button>
</div>
  
  