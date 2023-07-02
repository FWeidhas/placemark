<script>
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";
    // @ts-ignore
    import Chart from "svelte-frappe-charts";

    let users = [];
    let pois = [];

    
    /**
	 * @type {string}
	 */
    let trendiconuser;
    /**
	 * @type {string}
	 */
    let trendiconpois;

    let isLoading = false;
    
    
    
    let usercountoverdate = {
        labels: [],
        datasets: [
        {
            values: []
        }
        ]
    };

    let poiscountoverdate = {
        labels: [],
        datasets: [
        {
            values: []
        }
        ]
    };
    

    onMount(async () => {
            users = await placemarkService.getAllUser();
            pois = await placemarkService.getAllPois();
            
            let data = getCountofDates(users)
            // @ts-ignore
            usercountoverdate = mapData(data);
            trendiconuser = getTrend(data);

            let poidata = getCountofDates(pois);
            // @ts-ignore
            poiscountoverdate = mapData(poidata);
            trendiconpois = getTrend(poidata);
            console.log(data, poidata);
            isLoading = true;
        });

    /**
	 * @param {any[]} array
	 */
    function getCountofDates(array) {
        const countByDate = array.reduce((count, a) => {
        const createdAtDate = new Date(a.createdAt).toLocaleDateString();

        if (!count[createdAtDate]) {
        count[createdAtDate] = 1;
        } else {
        count[createdAtDate] += 1;
        }

        return count;
        }, {});

        const result = Object.entries(countByDate).map(([date, count]) => ({ date, count }));
        result.sort((a, b) => {
            const dateA = new Date(a.date.split('.').reverse().join('-'));
            const dateB = new Date(b.date.split('.').reverse().join('-'));
            // @ts-ignore
            return dateA - dateB;
        });

        for (let i = 1; i < result.length; i++) {
            result[i].count += result[i - 1].count;
        };

        return result;
    };

    /**
	 * @param {any[]} array
	 */
    function mapData(array) {
        let data = {
                labels: array.map((item) => item.date),
                datasets: [
                {
                    values: array.map((item) => item.count),
                },
                ],
            };
        return data;
    };

    /**
	 * @param {string | any[]} array
	 */
    function getTrend (array) {
        if(array[array.length - 1].count > array[array.length - 2].count) {
            return "fas fa-arrow-up is-large";
        }
        if(array[array.length - 1].count < array[array.length - 2].count) {
            return "fas fa-arrow-down is-large";
        }
        else {
            return "fas fa-arrow-right is-large";
        }
    }
</script>


<h1 class="title is-1 has-text-centered">Trends and Projections:</h1>
{#if isLoading}
<section class="section">
  <div class="container">
    <div class="columns">
        <div class="column is-narrow">
          <h2 class="title">Number of users over time</h2>
        </div>
        <div class="column">
          <i class={trendiconuser}></i>
        </div>
      </div>      
    <div class="chart">
        <Chart data={usercountoverdate} type="line"/>
    </div>
    <div class="columns">
        <div class="column is-narrow">
          <h2 class="title">Number of spots over time</h2>
        </div>
        <div class="column">
          <i class={trendiconuser}></i>
        </div>
    </div>
    <div class="chart">
        <Chart data={poiscountoverdate} type="line"/>
    </div>
  </div>
</section>
{:else}
<div class="loading-spinner has-text-centered">
    <span class="icon is-large">
      <i class="fas fa-spinner fa-pulse"></i>
    </span>
</div>    
{/if}