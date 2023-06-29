<script>
// @ts-nocheck

	import { createEventDispatcher } from "svelte";
	import { placemarkService } from "../services/placemark-service";



    
     /**
	 * @type {{ img: import("axios").AxiosRequestConfig<any> | undefined; _id: string; }}
	 */
      export let poi;

     let message ="";
    console.log(poi.img);
     const dispatch = createEventDispatcher();

     async function handleDelete (i) {
      if(poi.img){
        const img = poi.img[i].split("/").pop().replace(/\.[^/.]+$/, "");
        const index = parseInt(i);
        const response = await placemarkService.deleteImage(poi._id, img, index);
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
  {#each poi.img as img, i}
    <div class="card-image">
        <figure class="image is-128x128">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src={img}>
        </figure>
        <div class="has-text-centered mt-4">
            <button class="button" on:click={() => handleDelete(i)}>
                <i class="fas fa-trash"></i>
            </button>
        </div>
    </div>
  {/each}
{/if}
