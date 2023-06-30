<script>
    import "leaflet/dist/leaflet.css";
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";
    import { user } from "../stores.js";

    /**
     * @type {string[]}
     */
    let notes = [];

    
    /**
	 * @type {import("../services/leaflet-map.js").LeafletMap}
	 */
    let map;

    let categories = ["River", "Pond", "Sea", "Lake"];

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
            map.addLayerGroup("Own POI");
            map.addLayerGroup("All POI");
            categories.forEach(category => {
                map.addLayerGroup(category);
            });
            map.showLayerControl();

            const pois = await placemarkService.getPoisbyUserId($user.id);
            pois.forEach((/** @type {{ details: any; name: any; category: any; }} */ poi) => {
            addPoiMarker(map, poi, "Own POI");
            });

            const allpois = await placemarkService.getAllPois();
            allpois.forEach((/** @type {{ details: any; name: any; category: any; }} */ poi) => {
            addPoiMarker(map, poi, "All POI");
            addPoiMarker(map, poi, poi.category)
            });


        }
    });



   
    /**
	 * @param {import("../services/leaflet-map.js").LeafletMap} map
	 * @param {{details: any;name: any;category: any;}} poi
	 * @param {string | undefined} layer
	 */
    function addPoiMarker(map, poi, layer) {
        if (poi.details) {
            const poiStr = `${poi.name}\n${poi.category}\n${poi.details.description}`;
            map.addMarker(
            { lat: poi.details.latitude, lng: poi.details.longitude },
            poiStr,
            layer
            );
        } else {
            notes.push(`${poi.name} has no coordinates or details, add details to add it to the map.`);
            notes = [...notes];
        }
    }
</script>

{#if notes.length > 0}
    <div class="box">
    {#each notes as note}
        <div class="notification is-danger">{note}</div>
    {/each}
    </div>
{/if}
<div class="box" id="poi-map" style="height: 75vh"></div>
  