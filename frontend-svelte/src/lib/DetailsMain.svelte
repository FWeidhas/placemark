<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service";
    import { page } from '$app/stores';
    import AddDetailsForm from "./AddDetailsForm.svelte";

    let poi = {};
    let poiId = $page.params.slug;

    onMount(async () => {
      poi = await placemarkService.getPoibyId(poiId);
    });
  
</script>

{#if poi && poi.name}
  <h1 class="title is-4">Details of {poi.name}:</h1>
  <AddDetailsForm {poiId} />
{/if}
  
  <!-- <section class="section columns is-vcentered">
    <div class="column has-text-centered">
    <div class="title">
      {{poi.name}}
    </div>
      {{#if poi.details}}
        {{> list-details}}
        {{> edit-details}}
      {{/if}}
      {{#unless poi.details}}
        {{> add-details}}
      {{/unless}}
    </div>
    <div class="column">
      {{> poi-image }}
    </div>
  </section> -->
  <!-- <div class="box">
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
            <td>
            {poi.details.latitude}
            </td>
            <td>
            {poi.details.longitude}
            </td>
        </tr>
    </tbody>
    </table>
    <a href="/poi/{poi._id}/deletedetails/{poi.details._id}" class="ui icon button">
        <span class="icon is-small">
            <i class="fas fa-trash"></i>
        </span>
    </a>
</div> -->