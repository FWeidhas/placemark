<script lang="ts">
    // import "leaflet/dist/leaflet.css";
    import { onMount } from "svelte";
	import { latestDetails } from "../stores.js";


    export let poi: any;
    let note: string | null = null;
    let map: any;

    onMount(async () => {
        if (typeof window !== "undefined") {
            const { LeafletMap } = await import("../services/leaflet-map.js");
            // import("leaflet/dist/leaflet.css");

            const mapConfig = {
                location: { lat: 49.0134297, lng: 12.1016236 },
                zoom: 8,
                minZoom: 1
            };

            map = new LeafletMap("poi-map", mapConfig);
            map.showZoomControl();
            map.addLayerGroup("Point of Interest");
            map.addWeatherLayer("cloud", "cloud");
            map.addWeatherLayer("temp", "temp");
            map.addWeatherLayer("precipitation", "precipitation");
            map.addWeatherLayer("pressure", "pressure");
            map.addWeatherLayer("wind", "wind");
            map.showLayerControl();
        
            addPoiMarker(map, poi);
        }
    });

    function addPoiMarker(map: any, poi: any) {
        if(poi.details) {
            const poiStr = `
            <div>
                <h3>${poi.name}</h3>
                <p>Category: ${poi.category}</p>
                <p>Coordinates: ${poi.details.latitude}, ${poi.details.longitude}</p>
            </div>
            `;
            map.addMarker({ lat: poi.details.latitude, lng: poi.details.longitude }, poiStr, 'Points of Interest');
            map.moveTo(8, { lat: poi.details.latitude, lng: poi.details.longitude });
        }
        else {
            note = poi.name + " has no coordinates or details, add details to add it to the map.";
        }
    };

    latestDetails.subscribe((details: any) => {    
        if (map && details) {
            poi.details = details;
            map.clearMarker();
            note = null;
            addPoiMarker(map, poi);
        }
        if (map && !details) {
            poi.details = details;
            map.clearMarker();
            addPoiMarker(map, poi);
        }
    });
</script>

{#if note}
    <div class="notification is-danger">
        {note}
    </div>
{/if}
<div class="box" id="poi-map" style="height:75vh" />
