<script lang="ts">

	import { onMount } from "svelte";
	import { placemarkService } from "../services/placemark-service";
  import "../styles/weather-icons.css";

   
    export let poi: { details: { _id: string } };
   
    
    let weatherdata: {
    code: number;
    temp: number;
    tempmin: number;
    tempmax: number;
    pressure: number;
    wind: number;
    humidity: number;
    description: string;
    main: string;
  };

    onMount(async () => {
    if (poi.details) {
        try {
        const response = await placemarkService.getWeather(poi.details._id);
        const { weather, main, wind } = response;

        weatherdata = {
            code: weather[0].id,
            temp: main.temp,
            tempmin: main.temp_min,
            tempmax: main.temp_max,
            pressure: main.pressure,
            wind: wind.speed,
            humidity: main.humidity,
            description: weather[0].description,
            main : weather[0].main,
        };
        } catch (error) {
        console.log(error);
        }
    }
    });

</script>

<div class="container has-text-centered mt-5 mb-5">
    {#if weatherdata}
      <div class="box">
        <div class="columns is-vcentered">
          <div class="column">
            <span class="icon is-large is-size-1">
              <i class={"wi wi-owm-" + weatherdata.code}></i>
            </span>
            <p class="title">{weatherdata.main}</p>
            <p>{weatherdata.description}</p>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <p class="subtitle">Temperature</p>
            <p class="content">{Math.round(weatherdata.temp - 273.15)} °C</p>
          </div>
          <div class="column">
            <p class="subtitle">Wind</p>
            <p class="content">{weatherdata.wind} m/s</p>
          </div>
          <div class="column">
            <p class="subtitle">Humidity</p>
            <p class="content">{weatherdata.humidity} %</p>
          </div>
          <div class="column">
            <p class="subtitle">Pressure</p>
            <p class="content">{weatherdata.pressure} bar</p>
          </div>
          <div class="column">
            <p class="subtitle">Min Temperature</p>
            <p class="content">{Math.round(weatherdata.tempmin - 273.15)} °C</p>
          </div>
          <div class="column">
            <p class="subtitle">Max Temperature</p>
            <p class="content">{Math.round(weatherdata.tempmax - 273.15)} °C</p>
          </div>
        </div>
      </div>
    {:else}
      <p>Loading weather data...</p>
    {/if}
  </div>
  