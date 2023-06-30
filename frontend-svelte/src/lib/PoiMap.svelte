<script>
    import "leaflet/dist/leaflet.css";
    import { LeafletMap } from "../services/leaflet-map.js";
    import { onMount } from "svelte";
	import { placemarkService } from "../services/placemark-service.js";
	import { user } from "../stores.js";

    /**
	 * @type {{ details: any; name?: any; category?: any; }}
	 */
     export let poi;

    const mapConfig = {
        location: { lat: 49.0134297, lng: 12.1016236 },
        zoom: 8,
        minZoom: 1
    };

    onMount(async () => {
        const map = new LeafletMap("poi-map", mapConfig);
        map.showZoomControl();
        map.addLayerGroup('Points of Interest');
        map.showLayerControl();
        if (poi) {
            addPoiMarker(map, poi);
        } else {
            const pois = await placemarkService.getPoisbyUserId($user.id);
            pois.forEach((/** @type {{ details: any; name?: any; category?: any; }} */ poi) => {
                addPoiMarker(map, poi);
            });
        }
    });


    /**
	 * @param {LeafletMap} map
	 * @param {{ details: any; name?: any; category?: any; }} poi
	 */
    function addPoiMarker(map, poi) {
        if(poi.details) {
            const poiStr = `${poi.name}\n${poi.category}\n${poi.details.description}`;
            map.addMarker({ lat: poi.details.latitude, lng: poi.details.longitude }, poiStr, 'Points of Interest');
        }
        else {
            alert(poi.name + " has no coordinates or details, add details to add it to the map.")
        }
    }
</script>

<div class="box" id="poi-map" style="height:75vh" />
