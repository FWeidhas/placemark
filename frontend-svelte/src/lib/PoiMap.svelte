<script>
    import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../services/leaflet-map.js";
    import { onMount } from "svelte";
	import { placemarkService } from "../services/placemark-service.js";
	import { user } from "../stores.js";

    const mapConfig = {
        location: { lat: 49.0134297, lng: 12.1016236 },
        zoom: 8,
        minZoom: 1
    };

    onMount(async () => {
        const map = new LeafletMap("poi-map", mapConfig);
        map.showZoomControl();
		map.showLayerControl();
        const pois = await placemarkService.getPoisbyUserId($user.id);
        console.log(pois);
        pois.forEach((/** @type {{ details: { latitude: any; longitude: any; }; }} */ poi) => {
            map.addMarker({ lat: poi.details.latitude, lng: poi.details.longitude });
        });
    });
</script>

<div class="box" id="poi-map" style="height:75vh" />
