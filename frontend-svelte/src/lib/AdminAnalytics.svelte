<script>
    import { onMount } from "svelte";
	import { placemarkService } from "../services/placemark-service";
    import { latestUsers, user } from "../stores.js";

    /**
     * @type {any[]}
     */
    let users = [];
    let pois = [];
    
    /**
	 * @type {any[]}
	 */
    let numberofpoiswithcategory = [];

    onMount(async () => {
        users = await placemarkService.getAllUser();
        pois = await placemarkService.getAllPois();
        numberofpoiswithcategory = await placemarkService.getCategoryNumberofPois();
    });

    latestUsers.subscribe(async (users) => {
        if (users) {
            await refreshAnalytics();
        }
    });

    async function refreshAnalytics() {
        users = await placemarkService.getAllUser();
        pois = await placemarkService.getAllPois();
        numberofpoiswithcategory = await placemarkService.getCategoryNumberofPois();
    }
</script>

<div class="box">
<article class="media is-flex is-align-items-center">
    <div class="media-content has-text-centered">
    <p class="title is-4">Usercount:</p>
    <p class="subtitle is-6">{users.length}</p>
    </div>
</article>
</div>

<div class="box">
<article class="media">
    <div class="media-content">
    <div class="content">
        <div class="columns has-text-centered">
        {#each numberofpoiswithcategory as count}
        <div class="column">
            <p class="title is-4">{count.category}</p>
            <p class="subtitle is-6">Number of Poi's: {count.count}</p>
        </div>
        {/each}
        </div>
    </div>
    </div>
</article>
</div>

<div class="box">
<article class="media is-flex is-align-items-center">
    <div class="media-content has-text-centered">
    <p class="title is-4">Points of Interest count:</p>
    <p class="subtitle is-6">{pois.length}</p>
    </div>
</article>
</div>
  