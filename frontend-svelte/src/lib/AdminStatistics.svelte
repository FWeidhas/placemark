<script lang="ts">
        import { onMount } from "svelte";
        import { placemarkService } from "../services/placemark-service.js";
        import { latestUsers, user } from "../stores.js";
        // @ts-ignore
        import Chart from "svelte-frappe-charts";
    
        let types = ["pie", "bar", "percentage", "donut"]
        let pois = [];
        let ownPois = [];

        let users = [];
       
        let selectedType  = "pie";
        let type = "pie";
    
        let numberofpoiswithcategory = [];
    
        let numberofpoiswithcategoryuserbased = [];
    
        let categoryAllDistribution: { labels: any[]; datasets: { values: any[]; }[] | { values: any[]; }[]; };
    
        let userpoiscount: { labels: any[]; datasets: { values: any[]; }[] | { values: any[]; }[]; };
        
        let categoryOwnPoisDistribution: { labels: any[]; datasets: { values: any[]; }[] | { values: any[]; }[]; };
     
        let numberPoisallown: { labels: string[]; datasets: { values: number[]; }[] | { values: number[]; }[]; };
    
        onMount(async () => {
                ownPois = await placemarkService.getPoisbyUserId($user.id);
                pois = await placemarkService.getAllPois();
                numberofpoiswithcategory = await placemarkService.getCategoryNumberofPois();
                numberofpoiswithcategoryuserbased = await placemarkService.getCategoryNumberofPoisUser($user.id);
                if($user.isAdmin) {
                    users = await placemarkService.getPoisCountbyUser();

                    console.log(users);

                    userpoiscount = {
                    labels: users.map((item) => item.email),
                    datasets: [
                    {
                        values: users.map((item) => item.poisCount),
                    },
                    ],
                };
                }
    
                categoryAllDistribution = {
                    labels: numberofpoiswithcategory.map((item) => item.category),
                    datasets: [
                    {
                        values: numberofpoiswithcategory.map((item) => item.count),
                    },
                    ],
                };
    
                categoryOwnPoisDistribution = {
                    labels: numberofpoiswithcategoryuserbased.map((/** @type {{ category: any; }} */ item) => item.category),
                    datasets: [
                    {
                        values: numberofpoiswithcategoryuserbased.map((/** @type {{ count: any; }} */ item) => item.count),
                    },
                    ],
                };
    
                numberPoisallown = {
                    labels: ["Other Pois", "Own Pois"],
                    datasets: [
                        {
                            values: [pois.length - ownPois.length, ownPois.length]
                        }
                    ],
                };
        });
        
        function handleSelectedType() {
            type = selectedType;
            console.log(type);
        };

      latestUsers.subscribe(async (users) => {
        if (users) {
            await refreshChart();
        }
      });

      async function refreshChart() {
        ownPois = await placemarkService.getPoisbyUserId($user.id);
                pois = await placemarkService.getAllPois();
                numberofpoiswithcategory = await placemarkService.getCategoryNumberofPois();
                numberofpoiswithcategoryuserbased = await placemarkService.getCategoryNumberofPoisUser($user.id);
                if($user.isAdmin) {
                    users = await placemarkService.getPoisCountbyUser();

                    console.log(users);

                    userpoiscount = {
                    labels: users.map((item) => item.email),
                    datasets: [
                    {
                        values: users.map((item) => item.poisCount),
                    },
                    ],
                };
                }
    
                categoryAllDistribution = {
                    labels: numberofpoiswithcategory.map((item) => item.category),
                    datasets: [
                    {
                        values: numberofpoiswithcategory.map((item) => item.count),
                    },
                    ],
                };
    
                categoryOwnPoisDistribution = {
                    labels: numberofpoiswithcategoryuserbased.map((/** @type {{ category: any; }} */ item) => item.category),
                    datasets: [
                    {
                        values: numberofpoiswithcategoryuserbased.map((/** @type {{ count: any; }} */ item) => item.count),
                    },
                    ],
                };
    
                numberPoisallown = {
                    labels: ["Other Pois", "Own Pois"],
                    datasets: [
                        {
                            values: [pois.length - ownPois.length, ownPois.length]
                        }
                    ],
                };
	  };
    </script>
    
    <div class="select">
        <select bind:value={selectedType} on:change={handleSelectedType}>
            {#each types as type}
                <option>{type}</option>
            {/each}
        </select>
    </div>
    {#if userpoiscount}
    <section class="section">
      <div class="container">
        <h2 class="title">Number of spots of each user</h2>
        <div class="chart">
            {#if type === "pie"}
            <Chart data={userpoiscount} type={type}/>
            {:else if type === "bar"}
            <Chart data={userpoiscount} type={type}/>
            {:else if type === "percentage"}
            <Chart data={userpoiscount} type={type} />
            {:else if type === "donut"}
            <Chart data={userpoiscount} type={type} />
            {/if}
        </div>
      </div>
    </section>
    {:else}
    <div class="loading-spinner">
        <span class="icon is-large">
          <i class="fas fa-spinner fa-pulse"></i>
        </span>
    </div>    
    {/if}
    {#if categoryAllDistribution}
    <section class="section">
      <div class="container">
        <h2 class="title">Number of spots in each category</h2>
        <div class="chart">
            {#if type === "pie"}
            <Chart data={categoryAllDistribution} type={type}/>
            {:else if type === "bar"}
            <Chart data={categoryAllDistribution} type={type}/>
            {:else if type === "percentage"}
            <Chart data={categoryAllDistribution} type={type} />
            {:else if type === "donut"}
            <Chart data={categoryAllDistribution} type={type} />
            {/if}
        </div>
      </div>
    </section>
    {:else}
    <div class="loading-spinner">
        <span class="icon is-large">
          <i class="fas fa-spinner fa-pulse"></i>
        </span>
    </div>    
    {/if}
    {#if categoryOwnPoisDistribution}
    <section class="section">
      <div class="container">
        <h2 class="title">Number of spots in each category created by you</h2>
        <div class="chart">
            {#if type === "pie"}
            <Chart data={categoryOwnPoisDistribution} type={type}/>
            {:else if type === "bar"}
            <Chart data={categoryOwnPoisDistribution} type={type}/>
            {:else if type === "percentage"}
            <Chart data={categoryOwnPoisDistribution} type={type} />
            {:else if type === "donut"}
            <Chart data={categoryOwnPoisDistribution} type={type} />
            {/if}
        </div>
      </div>
    </section>
    {:else}
    <div class="loading-spinner">
        <span class="icon is-large">
          <i class="fas fa-spinner fa-pulse"></i>
        </span>
    </div>    
    {/if}
    {#if numberPoisallown}
    <section class="section">
      <div class="container">
        <h2 class="title">Number of spots from other users and created by you</h2>
        <div class="chart">
            {#if type === "pie"}
            <Chart data={numberPoisallown} type={type}/>
            {:else if type === "bar"}
            <Chart data={numberPoisallown} type={type}/>
            {:else if type === "percentage"}
            <Chart data={numberPoisallown} type={type} />
            {:else if type === "donut"}
            <Chart data={numberPoisallown} type={type} />
            {/if}
        </div>
      </div>
    </section>
    {:else}
    <div class="loading-spinner">
        <span class="icon is-large">
          <i class="fas fa-spinner fa-pulse"></i>
        </span>
    </div>    
    {/if}
    
    