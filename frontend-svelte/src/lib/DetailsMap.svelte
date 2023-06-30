<script>
    import "leaflet/dist/leaflet.css";
    import { onMount } from "svelte";
	import { latestDetails } from "../stores.js";

    
     /**
	 * @type {{ details: any; name: any; category: any; }}
	 */
      export let poi;

    /**
	 * @type {string | null}
	 */
    let note = null;

    
    /**
	 * @type {import("../services/leaflet-map.js").LeafletMap}
	 */
    let map;

    onMount(async () => {
        if (typeof window !== "undefined") {
            const { LeafletMap } = await import("../services/leaflet-map.js");
            import("leaflet/dist/leaflet.css");

            const mapConfig = {
                location: { lat: 49.0134297, lng: 12.1016236 },
                zoom: 8,
                minZoom: 1
            };

            map = new LeafletMap("poi-map", mapConfig);
            map.showZoomControl();
            map.addLayerGroup("Points of Interest");
            map.showLayerControl();
        
            addPoiMarker(map, poi);
        }
    });


   
    
    /**
	 * @param {import("../services/leaflet-map.js").LeafletMap} map
	 * @param {{ details: any; name: any; category: any; }} poi
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
