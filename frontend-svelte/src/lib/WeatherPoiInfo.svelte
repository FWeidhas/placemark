<script>
// @ts-nocheck

	import { onMount } from "svelte";
	import { placemarkService } from "../services/placemark-service";

    /**
	 * @type {{ details: { _id: string; }; }}
	 */
     export let poi;
   
    
    let weatherdata;

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

        console.log(weatherdata);
        } catch (error) {
        console.log(error);
        }
    }
    });

</script>

<div class="card-container m-3">
    {#if weatherdata}
      <div class="card">
        <div class="card-content">
          <div class="card-content-flex">
            <div>
              <span class="icon is-large">
                <i class={"wi wi-owm-" + weatherdata.code}></i>
              </span>
            </div>
            <div>
              <p class="title">{weatherdata.main}</p>
              <p>{weatherdata.description}</p>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <p class="subtitle">Temperature</p>
              <p class="content">{weatherdata.temp} °C</p>
            </div>
            <div class="column">
              <p class="subtitle">Wind</p>
              <p class="content">{weatherdata.wind} m/s</p>
            </div>
            <div class="column">
              <p class="subtitle">Humidity</p>
              <p class="content">{weatherdata.humidity}</p>
            </div>
            <div class="column">
              <p class="subtitle">Pressure</p>
              <p class="content">{weatherdata.pressure}</p>
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
      </div>
    {:else}
      <p>Loading weather data...</p>
    {/if}
</div>