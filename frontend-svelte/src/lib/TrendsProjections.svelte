<script lang="ts">
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";
    // @ts-ignore
    import Chart from "svelte-frappe-charts";
	import { linearRegression } from "../services/utils.js";

    let users: any[] = [];
    let pois: any[] = [];

    let trendiconuser: string;
    let trendiconpois: string;

    let isLoading = false;
    
    
    
    let usercountoverdate: { labels: string[], datasets: { values: number[] }[] } = {
        labels: [],
        datasets: [
        {
            values: []
        }
        ]
    };

    let poiscountoverdate: { labels: string[], datasets: { values: number[] }[] } = {
        labels: [],
        datasets: [
        {
            values: []
        }
        ]
    };

    let userprojection: { labels: string[], datasets: { values: number[] }[] } = {
        labels: [],
        datasets: [
        {
            values: []
        }
        ]
    };

    let poiprojection: { labels: string[], datasets: { values: number[] }[] } = {
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
            
            usercountoverdate = mapData(data);
            trendiconuser = getTrend(data);

            let poidata = getCountofDates(pois);
            
            poiscountoverdate = mapData(poidata);
            trendiconpois = getTrend(poidata);
            let userprojdata = getprojectedCharts(data);
            
            userprojection.labels = userprojdata.fulldates;
            
            userprojection.datasets[0].values = userprojdata.fullcounts;

            let poiprojdata = getprojectedCharts(poidata);
            
            poiprojection.labels = poiprojdata.fulldates;
            
            poiprojection.datasets[0].values = poiprojdata.fullcounts;

            isLoading = true;
        });

      
        function getprojectedCharts (array: any[]) {
            let projecteddata = linearRegression(array);

            const dates = array.map((item) => item.date);
            const counts = array.map((item) => item.count);

            const nextdates = getNextSevenDays();

            let fullcounts = counts.concat(projecteddata);
            let fulldates = dates.concat(nextdates);

            return { fullcounts, fulldates };
        }

        function getNextSevenDays() {
        const currentDate = new Date();
        const dates = [];

        for (let i = 1; i <= 7; i++) {
            const date = new Date();
            date.setDate(currentDate.getDate() + i);
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear().toString();
            const formattedDate = `${day}.${month}.${year}`;
            dates.push(formattedDate);
        }

        return dates;
        }

    function getCountofDates(array: any[]) {
        const countByDate = array.reduce((count, a) => {
        const createdAtDate = new Date(a.createdAt).toLocaleDateString();

        if (!count[createdAtDate]) {
        count[createdAtDate] = 1;
        } else {
        count[createdAtDate] += 1;
        }

        return count;
        }, {});

        const result: { date: string; count: number }[] = Object.entries(countByDate).map(([date, count]) => ({ date, count: count as number, }));
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

    function mapData(array: any[]) {
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

    function getTrend (array: any[]) {
        if(array[array.length - 1].count > array[array.length - 2].count) {
            return "fas fa-arrow-up is-large fa-3x";
        }
        if(array[array.length - 1].count < array[array.length - 2].count) {
            return "fas fa-arrow-down is-large fa-3x";
        }
        else {
            return "fas fa-arrow-right is-large fa-3x";
        }
    }
</script>


<h1 class="title is-1 has-text-centered">Trends and Projections:</h1>
{#if isLoading}
<section class="section">
  <div class="container">
    <div class="columns">
        <div class="column has-text-centered">
          <h2 class="title">Number of users over time:</h2>
        </div>
        <div class="column has-text-centered">
            <h2 class="title">Trend:</h2>
            <div class="icon-wrapper is-flex is-align-items-center is-justify-content-center">
                <i class={trendiconuser}></i>
            </div>
        </div>         
    </div>
    <div class="columns">
        <div class="column is-half">
            <h2 class="title">Past:</h2>
            <Chart data={usercountoverdate} type="line"/>
        </div>
        <div class="column is-half">
            <h2 class="title">Future:</h2>
            <Chart data={userprojection} type="line"/>
        </div>
    </div>            
    <div class="columns">
        <div class="column has-text-centered">
          <h2 class="title">Number of points over time:</h2>
        </div>
        <div class="column has-text-centered">
            <h2 class="title">Trend:</h2>
            <div class="icon-wrapper is-flex is-align-items-center is-justify-content-center">
                <i class={trendiconuser}></i>
            </div>
        </div>
    </div>
    <div class="columns">
        <div class="column is-half">
            <h2 class="title">Past:</h2>
            <Chart data={poiscountoverdate} type="line"/>
        </div>
        <div class="column is-half">
            <h2 class="title">Future:</h2>
            <Chart data={poiprojection} type="line"/>
        </div>
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