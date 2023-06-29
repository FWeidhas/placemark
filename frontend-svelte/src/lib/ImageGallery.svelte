<script>
// @ts-nocheck

	import { createEventDispatcher } from "svelte";
	import { placemarkService } from "../services/placemark-service";



    
     /**
	 * @type {{ img: import("axios").AxiosRequestConfig<any> | undefined; _id: string; }}
	 */
      export let poi;

     let message ="";

     const dispatch = createEventDispatcher();

     async function handleDelete () {
      if(poi.img){
        const response = await placemarkService.deleteImage(poi._id, poi.img);
        if (response.status === 204) {
          dispatch('imageDeleted');
        } else {
            message = "Delete not completed - some error occurred";
        }
      }
      
      return;
    };
</script>

{#if poi.img}
  {#each poi.img as img}
    <div class="card-image">
        <figure class="image is-256x256">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src={img}>
        </figure>
        <div class="has-text-centered mt-4">
            <button class="button" on:click={handleDelete}>
                <i class="fas fa-trash"></i>
            </button>
        </div>
    </div>
  {/each}
{/if}
