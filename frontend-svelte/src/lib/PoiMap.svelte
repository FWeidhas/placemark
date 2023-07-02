<script lang="ts">
    // import "leaflet/dist/leaflet.css";
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";
    import { user } from "../stores.js";

    let notes: string[] = [];

    interface LeafletMap {
        showZoomControl(): void;
        addLayerGroup(layerName: string): void;
        showLayerControl(): void;
        addWeatherLayer(layerName: string, layerType: string): void;
        addMarker(coordinates: { lat: number; lng: number }, content: string, layer?: string | undefined): void;
    }
    let mapTerrain: LeafletMap;
    let mapSat: LeafletMap;
    let mapContext: LeafletMap;
    let mapWeather: LeafletMap;

    let categories: string[] = ["River", "Pond", "Sea", "Lake"];

    onMount(async () => {
        if (typeof window !== "undefined") {
            const { LeafletMap } = await import("../services/leaflet-map.js");

            const mapConfig = {
                location: { lat: 49.0134297, lng: 12.1016236 },
                zoom: 8,
                minZoom: 1
            };

            mapTerrain = new LeafletMap("poi-terrainmap", mapConfig, "Terrain");
            mapSat = new LeafletMap("poi-satmap", mapConfig, "Satellite");
            mapContext = new LeafletMap("poi-contextmap", mapConfig, "Street");
            mapWeather = new LeafletMap("poi-weathermap", mapConfig, "Terrain");

            mapTerrain.showZoomControl();
            mapTerrain.addLayerGroup("Own POI");
            mapTerrain.addLayerGroup("All POI");
            categories.forEach(category => {
                mapTerrain.addLayerGroup(category);
            });
            mapTerrain.showLayerControl();

            mapSat.showZoomControl();
            mapSat.addLayerGroup("Own POI");
            mapSat.addLayerGroup("All POI");
            categories.forEach(category => {
                mapSat.addLayerGroup(category);
            });
            mapSat.showLayerControl();

            mapContext.showZoomControl();
            mapContext.addLayerGroup("Own POI");
            mapContext.addLayerGroup("All POI");
            categories.forEach(category => {
                mapContext.addLayerGroup(category);
            });
            mapContext.showLayerControl();

            mapWeather.showZoomControl();
            mapWeather.addLayerGroup("Own POI");
            mapWeather.addLayerGroup("All POI");
            categories.forEach(category => {
                mapWeather.addLayerGroup(category);
            });
            
            mapWeather.addWeatherLayer("cloud", "cloud");
            mapWeather.addWeatherLayer("temp", "temp");
            mapWeather.addWeatherLayer("precipitation", "precipitation");
            mapWeather.addWeatherLayer("pressure", "pressure");
            mapWeather.addWeatherLayer("wind", "wind");
            mapWeather.showLayerControl();

            const pois = await placemarkService.getPoisbyUserId($user.id);
            pois.forEach((poi) => {
                addPoiMarker(mapTerrain, poi, "Own POI");
            });
            pois.forEach((poi) => {
                addPoiMarker(mapSat, poi, "Own POI");
            });
            pois.forEach((poi) => {
                addPoiMarker(mapContext, poi, "Own POI");
            });
            pois.forEach((poi) => {
                addPoiMarker(mapWeather, poi, "Own POI");
            });

            const allpois = await placemarkService.getAllPois();
            allpois.forEach((poi) => {
                addPoiMarker(mapTerrain, poi, "All POI");
                addPoiMarker(mapTerrain, poi, poi.category);
            });
            allpois.forEach((poi) => {
                addPoiMarker(mapSat, poi, "All POI");
                addPoiMarker(mapSat, poi, poi.category);
            });
            allpois.forEach((poi) => {
                addPoiMarker(mapContext, poi, "All POI");
                addPoiMarker(mapContext, poi, poi.category);
            });
            allpois.forEach((poi) => {
                addPoiMarker(mapWeather, poi, "All POI");
                addPoiMarker(mapWeather, poi, poi.category);
            });
        }
    });

    function addPoiMarker(map: LeafletMap, poi: { details: any; name: any; category: any; _id: any }, layer?: string | undefined) {
        if (poi.details) {
            const poiStr = `
            <div>
                <h3>${poi.name}</h3>
                <p>Category: ${poi.category}</p>
                <p>Coordinates: ${poi.details.latitude}, ${poi.details.longitude}</p>
                <a href="/details/${poi._id}">Details</a>
            </div>
            `;
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

<div class="columns is-multiline">
    <div class="column is-half">
        <div class="box" id="poi-terrainmap" style="height: 75vh"></div>
    </div>
    <div class="column is-half">
        <div class="box" id="poi-satmap" style="height: 75vh"></div>
    </div>
    <div class="column is-half">
        <div class="box" id="poi-contextmap" style="height: 75vh"></div>
    </div>
    <div class="column is-half">
        <div class="box" id="poi-weathermap" style="height: 75vh"></div>
    </div>
</div>
{#if notes.length > 0}
    <div class="box">
        {#each notes as note}
            <div class="notification is-danger">{note}</div>
        {/each}
    </div>
{/if}
