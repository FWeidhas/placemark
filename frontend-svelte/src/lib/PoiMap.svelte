<script>
    import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../services/leaflet-map.js";
    import { onMount } from "svelte";

    const mapConfig = {
        location: { lat: 49.0134297, lng: 12.1016236 },
        zoom: 8,
        minZoom: 1
    };

    onMount(async () => {
        const map = new LeafletMap("poi-map", mapConfig);
    });
</script>

<div class="box" id="poi-map" style="height:75vh" />
