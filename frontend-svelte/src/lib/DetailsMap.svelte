<script>
    import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../services/leaflet-map.js";
    import { onMount } from "svelte";
	import { latestDetails } from "../stores.js";

    /**
	 * @type {{ details: any; name?: any; category?: any; }}
	 */
     export let poi;

    /**
	 * @type {string | null}
	 */
    let note = null;

    /**
	 * @type {LeafletMap}
	 */
    let map;
    let mapConfig = {
        location: { lat: 49.0134297, lng: 12.1016236 },
        zoom: 8,
        minZoom: 1
    };

    onMount(async () => {
        map = new LeafletMap("poi-map", mapConfig);
        map.showZoomControl();
        map.addLayerGroup('Points of Interest');
        map.showLayerControl();
        
        addPoiMarker(map, poi);
    });


    /**
	 * @param {LeafletMap} map
	 * @param {{ details: any; name?: any; category?: any; }} poi
	 */
    function addPoiMarker(map, poi) {
        if(poi.details) {
            const poiStr = `${poi.name}\n${poi.category}\n${poi.details.description}`;
            map.addMarker({ lat: poi.details.latitude, lng: poi.details.longitude }, poiStr, 'Points of Interest');
            map.moveTo(8, { lat: poi.details.latitude, lng: poi.details.longitude });
        }
        else {
            note = poi.name + " has no coordinates or details, add details to add it to the map.";
        }
    };

    latestDetails.subscribe((details) => {    
        console.log(details);    
        if (map && details) {
            poi.details = details;
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
