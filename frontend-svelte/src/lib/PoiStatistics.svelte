<script>
    import { onMount } from "svelte";
	import { placemarkService } from "../services/placemark-service.js";
    import { user } from "../stores.js";
    // @ts-ignore
    import Chart from "svelte-frappe-charts";

    
    let pois = [];
    let ownPois = [];
    
    /**
	 * @type {any[]}
	 */
    let numberofpoiswithcategory = [];

    /**
	 * @type {{ labels: any[]; datasets: { values: any[]; }[]; }}
	 */
    let categoryAllDistribution;

    let categoryOwnDistribution;
 
    /**
	 * @type {{ labels: string[]; datasets: { values: any[]; }[]; }}
	 */
    let numberPoisallown;

    onMount(async () => {
            ownPois = await placemarkService.getPoisbyUserId($user.id);
            pois = await placemarkService.getAllPois();
            numberofpoiswithcategory = await placemarkService.getCategoryNumberofPois();
            console.log(numberofpoiswithcategory, pois, ownPois);

            categoryAllDistribution = {
                labels: numberofpoiswithcategory.map((item) => item.category),
                datasets: [
                {
                    values: numberofpoiswithcategory.map((item) => item.count),
                },
                ],
            };

            numberPoisallown = {
                labels: ["Other Pois", "Own Pois"],
                datasets: [
                    {
                        values: [pois.length - ownPois.length, ownPois.length]
                    }
                ]
            };



    });
</script>

{#if categoryAllDistribution}
<Chart data={categoryAllDistribution} type="pie" options={{ groupOthers: false }} />
<Chart data={numberPoisallown} type="pie" options={{ groupOthers: false }} />
{/if}
