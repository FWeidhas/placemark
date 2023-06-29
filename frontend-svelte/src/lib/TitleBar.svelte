<script>
	import { onMount } from "svelte";
    import { user } from "../stores.js";
	import { placemarkService } from "../services/placemark-service.js";

    export let title = "";
    export let subTitle = "";

    /**
	 * @type {boolean | import("axios").AxiosResponse<any, any>}
	 */
    let userinfo;

    onMount(async () => {
        if($user.id)
            userinfo = await placemarkService.getUser($user.id);
    });
</script>

<div class="box has-text-centered columns m-2">
    <div class="column">
        <div class="title is-5">{title}</div>
        <div class="subtitle is-5">{subTitle}</div>
    </div>
    <div class="column">
        <div class="title is-5">{title}</div>
        <div class="subtitle is-5">{subTitle}</div>
    </div>
    <div class="column">
        <i style="font-size: 48px; color: rgb(74, 180, 118);"  class="far fa-map" />
        <i style="font-size: 48px; color: rgb(153, 14, 14);" class="fas fa-map-marker-alt" />
        <div class="is-size-7">Placemark</div>
    </div>
</div>
