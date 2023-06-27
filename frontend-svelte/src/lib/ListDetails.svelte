<script>
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
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{poi.details.latitude}</td>
          <td>{poi.details.longitude}</td>
        </tr>
      </tbody>
    </table>
    <button class="ui icon button" on:click={deleteDetails}>
      <span class="icon is-small">
        <i class="fas fa-trash"></i>
      </span>
    </button>
  </div>
  