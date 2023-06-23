<script>
    import { user } from "../stores.js";
    export let title = "";
    export let subTitle = "";
</script>

<div class="box has-text-centered columns m-2">
    <div class="column">
        <div class="title is-5">{title}</div>
        <div class="subtitle is-5">{subTitle}</div>
    </div>
    <div class="column">
        <i style="font-size: 48px; color: rgb(74, 180, 118);"  class="far fa-map" />
        <i style="font-size: 48px; color: rgb(153, 14, 14);" class="fas fa-map-marker-alt" />
        {#if $user.email}
            <div class="is-size-7">{$user.email}</div>
        {:else}
            <div class="is-size-7">Placemark 5.0</div>
        {/if}
    </div>
</div>
