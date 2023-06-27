<script>
    import { placemarkService } from "../services/placemark-service.js";
  
  /**
   * @type {any}
   */
  export let poi;
  
  async function deleteDetails(id) {
    await placemarkService.deletePoibyId(id);
    poisList = await placemarkService.getPoisbyUserId($user.id);
    console.log(poisList);
  };

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
  