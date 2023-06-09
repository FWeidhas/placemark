/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import * as L from "leaflet";

export const weatherlayers = {
    temp: L.tileLayer('https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid={apiKey}', {
        maxZoom: 17,
        attribution: 'Map data &copy; <a href="https://openweathermap.org">OpenWeatherMap</a>',
        apiKey: '53d225c3b53c52766d3b630472fd0a37'
    }),

    wind: L.tileLayer('https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid={apiKey}', {
        maxZoom: 17,
        attribution: 'Map data &copy; <a href="https://openweathermap.org">OpenWeatherMap</a>',
        apiKey: '53d225c3b53c52766d3b630472fd0a37'
    }),

    cloud: L.tileLayer('https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid={apiKey}', {
        maxZoom: 17,
        attribution: 'Map data &copy; <a href="https://openweathermap.org">OpenWeatherMap</a>',
        apiKey: '53d225c3b53c52766d3b630472fd0a37'
    }),

    precipitation: L.tileLayer('https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid={apiKey}', {
        maxZoom: 17,
        attribution: 'Map data &copy; <a href="https://openweathermap.org">OpenWeatherMap</a>',
        apiKey: '53d225c3b53c52766d3b630472fd0a37'
    }),

    pressure: L.tileLayer('https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid={apiKey}', {
        maxZoom: 17,
        attribution: 'Map data &copy; <a href="https://openweathermap.org">OpenWeatherMap</a>',
        apiKey: '53d225c3b53c52766d3b630472fd0a37'
    }),
}

export class LeafletMap {
    imap = {};
    control = {};
    overlays = {};

    // https://leaflet-extras.github.io/leaflet-providers/preview/

    baseLayers = {
        Terrain: L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 17,
            attribution:
                'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        }),
        Satellite: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
            attribution: "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
        }),
        Street: L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors, Imagery &copy; <a href="https://www.mapbox.com">Mapbox</a>'
        }),
    };

    constructor(id, descriptor, activeLayer = "Street") {
        let defaultLayer = this.baseLayers.Terrain;
        if (activeLayer) {
            defaultLayer = this.baseLayers[activeLayer];
        }
        this.imap = L.map(id, {
            center: [descriptor.location.lat, descriptor.location.lng],
            zoom: descriptor.zoom,
            minZoom: descriptor.minZoom,
            zoomControl: false,
            layers: [defaultLayer]
        });
    }

    addWeatherLayer(layer, title) {
        const weatherLayer = weatherlayers[layer];
        if (weatherLayer) {
            this.overlays[title] = L.layerGroup([]);
            this.overlays[title].addLayer(weatherLayer);
            this.imap.addLayer(this.overlays[title]);
        } else {
            console.error(`Weather layer '${layer}' not found.`);
        }
    }

    addLayerGroup(title) {
        this.overlays[title] = L.layerGroup([]);
        this.imap.addLayer(this.overlays[title]);
    }

    showLayerControl() {
        this.control = L.control.layers(this.baseLayers, this.overlays).addTo(this.imap);
    }

    showZoomControl(position = "topleft") {
        L.control
            .zoom({
                position: position
            })
            .addTo(this.imap);
    }

    moveTo(zoom, location) {
        this.imap.setZoom(zoom);
        this.imap.panTo(new L.LatLng(location.lat, location.lng));
    }

    zoomTo(location) {
        this.imap.setView(new L.LatLng(location.lat, location.lng), 8);
    }

    addMarker(location, popupText = "", layerTitle = "default") {
        let group = {};
        let marker = L.marker([location.lat, location.lng]);
        if (popupText) {
            var popup = L.popup({ autoClose: false, closeOnClick: false });
            popup.setContent(popupText);
            marker.bindPopup(popup);
        }
        if (!this.overlays[layerTitle]) {
            group = L.layerGroup([]);
            this.overlays[layerTitle] = group;
            this.imap.addLayer(group);
        } else {
            group = this.overlays[layerTitle];
        }
        marker.addTo(group);
    }

    clearMarker() {
        for (let layer in this.overlays) {
          this.overlays[layer].clearLayers();
        }
    }

    invalidateSize() {
        this.imap.invalidateSize();
        let hiddenMethodMap = this.imap;
        hiddenMethodMap._onResize();
    }
}
